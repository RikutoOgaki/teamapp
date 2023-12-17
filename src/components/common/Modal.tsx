import { useState } from 'react'
import style from '@/styles/components/common/modal.module.scss'

type Props = {
    children: React.ReactNode
}

export function Modal(props: Props) {
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}