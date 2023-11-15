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
        groups.group_id,
        groups.name,
        item_arrays.item_array AS items
    FROM
        groups
    LEFT JOIN LATERAL (
    SELECT
        json_agg(items ORDER BY item_ids.i) AS item_array
    FROM
        unnest(groups.item_ids) WITH ORDINALITY AS item_ids(item_id, i)
    JOIN items USING (item_id)
        ) item_arrays ON true
    ORDER BY
    groups.group_id;
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
            result: result
        })
    } finally {
        client.release()
    }
}