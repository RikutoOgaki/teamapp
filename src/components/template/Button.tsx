import { useState, useEffect } from 'react'
import style from '@/styles/components/template/button.module.scss'

type Props = {
    text: string,
    className?: string | undefined,
    handleOnClick?: () => void
}

export function Button(props: Props) {

    const [state, setState] = useState({
        text: props.text,
        className: props.className
    })

    useEffect(() => {
        setState({
            ...state,
            text: props.text,
            className: props.className
        })
    }, [props])

    return (
        <>
            <button
                className={props.className}
                onClick={props.handleOnClick}
            >{state.text}</button>
        </>
    )
}