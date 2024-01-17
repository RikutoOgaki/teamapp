import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import style from '@/styles/components/common/modal.module.scss'

// モーダルコンポーネント作成中

type Props = {
    children: React.ReactNode,
    boolean: boolean
}

export function Modal(props: Props) {

    const [modal, setModal] = useState(props.boolean)

    return (
        <>
            <div className={style.modalWrap}>
                <div className={style.modalBox}>
                    <div className={style.top}>
                        <FaPlus
                            className={style.icon}
                            onClick={() => setModal(true)}
                        />
                        <p className={style.text}>通知</p>
                    </div>
                    <div className={style.contents}>
                        {props.children}
                    </div>
                    <div className={style.bottom}></div>
                </div>
            </div>
        </>
    )
}