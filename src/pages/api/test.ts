// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

type Input = {
}
type Output = {
    result: any
}

async function getTrainData(client: any) {
    const result = await client.query(`
    SELECT 
    routes.id AS route_id, 
    routes.routeName, 
    (
        SELECT JSON_AGG(
            json_build_object(
                'homeName', homes.homeName,
                'some', (
                    SELECT JSON_AGG(
                        json_build_object(
                            'time', times.time,
                            'train', times.train
                        )
                    )
                    FROM times
                    WHERE times.homeId = homes.id
                )
            )
        )
        FROM homes
        WHERE homes.routeId = routes.id
    ) AS homes
FROM 
    routes
    `)

    return result
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const json: Input = req.body

    const pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        max: 100,
        idleTimeoutMillis: 3000,
        connectionTimeoutMillis: 2000,
    })

    const client = await pool.connect()
    try {
        const result = await getTrainData(client)

        res.status(200).json({
            result: result.rows
        })
    } finally {
        client.release()
    }
}