import { useState } from 'react'
import style from '@/styles/components/common/modal.module.scss'

// モーダルコンポーネント作成中

type Props = {
    children: React.ReactNode
}

export function Modal(props: Props) {
    return (
        <>
            <div>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}