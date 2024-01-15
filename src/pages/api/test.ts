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
    test.id AS route_id, 
    test.routeName, 
    (
        SELECT JSON_AGG(
            json_build_object(
                'homeName', test1.homeName,
                'some', (
                    SELECT JSON_AGG(
                        json_build_object(
                            'time', test2.time,
                            'train', test2.train
                        )
                    )
                    FROM test2
                    WHERE test2.homeId = test1.id
                )
            )
        )
        FROM test1
        WHERE test1.routeId = test.id
    ) AS test1
FROM 
    test
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