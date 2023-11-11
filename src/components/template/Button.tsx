import { useState, useEffect } from 'react'

type Props = {
    text: string
}

export function Button(props: Props) {

    const [state, setState] = useState<Props>({
        text: props.text
    })

    return (
        <></>
    )
}