// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { Pool } = require('pg')

// type Result = {

// }

// type Route = {

// }

// type Home = {
//     homeid:number,
//     homename:string,
//     routeid:number,
//     delay:string,
// }

// type Train = {

// }

type Input = {
}
type Output = {
}

async function getTrainData(client: any) {
    const result = await client.query(`
    SELECT
    JSON_BUILD_OBJECT(
        'routeid', Route.routeid,
        'routename', Route.routename,
        'homes', JSON_AGG(
            JSON_BUILD_OBJECT(
                'homeid', Home.homeid,
                'homename', Home.homename,
                'delay', Home.delay,
                'trains', JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'trainid', Train.trainid,
                        'trainsome', Train.trainsome,
                        'timedeta', Train.timedeta
                    )
                )
            )
        )
    ) AS route_data
FROM
    Route
JOIN
    Home ON Route.routeid = Home.routeid
JOIN
    Train ON Home.homeid = Train.homeid
GROUP BY
    Route.routeid, Route.routename;
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
            list: result
        })
    } finally {
        client.release()
    }
}