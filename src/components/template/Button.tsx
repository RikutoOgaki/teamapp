import { useState, useEffect } from 'react'
import style from '@/styles/components/template/button.module.scss'

type Props = {
    text: string
}

export function Button(props: Props) {

    const [state, setState] = useState<Props>({
        text: props.text
    })

    useEffect(() => {
        setState({
            ...state,
            text: props.text
        })
    }, [props])

    return (
        <>
            <button className={style.btn}>{state.text}</button>
        </>
    )
}