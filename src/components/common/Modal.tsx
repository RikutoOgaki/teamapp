import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import style from '@/styles/components/common/modal.module.scss'

// モーダルコンポーネント作成中

type Props = {
    children: React.ReactNode,
    boolean?: boolean,
    onClose?: () => void
}

export function Modal(props: Props) {

    return (
        <>
            <div className={style.modalWrap}>
                {props.children}
            </div>
        </>
    )
}