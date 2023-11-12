import { useState, useEffect } from 'react'

async function Get(state: any, setState: Function) {
    const res = await fetch('/api/getTrainData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()

    setState(result)
}

export default function Sample01() {

    const [state, setState] = useState<any>()

    console.log(state);


    return (
        <>
            <button
                onClick={() => Get(state, setState)}
            >データ取得</button>
        </>
    )
}