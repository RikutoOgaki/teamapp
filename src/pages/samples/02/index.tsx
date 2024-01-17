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
    const [delay, setDelay] = useState()

    useEffect(() => {
        Get(state, setState)
    }, [])

    useEffect(() => {
        const url = 'https://ntool.online/data/train_all.json'
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }, [])




    console.log(state);
    console.log(delay);



    return (
        <>
            {/* <button
                onClick={() => Get(state, setState)}
            >データ取得</button> */}
            {/* {state} */}
        </>
    )
}