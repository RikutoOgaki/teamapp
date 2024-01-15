import { useState, useEffect } from 'react'

async function Get(state: any, setState: Function) {
    const res = await fetch('/api/test', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
        }
    })

    const result = await res.json()

    setState(result.result)
}

export default function Sample02() {
    const [state, setState] = useState()

    useEffect(() => {
        Get(state, setState)
    }, [])


    console.log(state);


    return (
        <>
            {/* <button
                onClick={() => Get(state, setState)}
            >データ取得</button> */}
            {/* {state} */}
        </>
    )
}