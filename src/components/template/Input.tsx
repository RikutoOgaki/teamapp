import { useState, useEffect } from 'react'
import style from '@/styles/components/template/input.module.scss'

type Props = {
    value: string
}

export default function Input(props: Props) {

    const [state, setState] = useState(props.value)

    useEffect(() => {
        setState(props.value)
    }, [props])

    return (
        <>
            <input
                className={style.input}
                type="text"
                value={state}
                onChange={() => setState(props.value)}
            />
        </>
    )
}