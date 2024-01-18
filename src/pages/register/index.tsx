import { useState, useEffect } from 'react'
import Link from 'next/link'
import style from '@/styles/register/index.module.scss'
import { Button } from '@/components/template/Button'

export default function Register() {

    const [starthome, setStartHome] = useState(
        {
            id: 1,
            starthome: '大阪梅田',
            time: '05:00',
            type: '普通',
            train: '阪急京都本線'
        }
    )
    const [endhome, setEndHome] = useState(
        {
            id: 2,
            endhome: '十三',
            time: '05:05',
            type: '普通',
            train: '阪急京都本線'
        }
    )

    // 時間をフォーマットして秒の表示を消さないといけないかもしれない


    return (
        <>
            <div className={style.wrap}>
                <div className={style.linkBox}>
                    <Link href={''} className={style.link}> ＜戻る</Link>
                </div>
                <div className={style.trainContents}>
                    <div className={style.trainBoxWrap}>
                        <div className={style.trainBox}>
                            <p className={style.trainText}>大阪梅田<span>→</span>十三</p>
                        </div>
                    </div>
                    <div className={style.trainData}>
                        <p>1/12(金)</p>
                        <p className={style.timeText}>
                            8:23
                            <span>→</span>
                            9:00
                            <span className={style.item}>(37分)</span>
                        </p>
                        <p>乗換なし<span>5.2km</span>170円</p>
                    </div>
                    <div className={style.btnBox}>
                        <Button text='1本前' className={style.btnAfter} />
                        <Button text='1本後' className={style.btnBefore} />
                    </div>
                    <div className={style.routeBox}>
                        {/* 発に関するデータ */}
                        <div className={style.start}>
                            <ul className={style.time}><li>{starthome.time}</li></ul>
                            <p className={style.tag}>発</p>
                            <div>
                                <p>{starthome.starthome}</p>
                            </div>
                        </div>

                        {/* 路線の情報のデータ */}
                        <div className={style.detail}>
                            <ul className={style.acces}>
                                <li className={style.center}>
                                    <span className={style.line}></span>
                                    <p className={style.text}>{starthome.train} {starthome.type}</p>
                                </li>
                            </ul>
                        </div>

                        {/* 着に関するデータ */}
                        <div className={style.end}>
                            <ul className={style.time}><li>{endhome.time}</li></ul>
                            <p className={style.tag}>着</p>
                            <div>
                                <p>{endhome.endhome}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={style.btnBox}>
                    <Button
                        text='登録'
                        className={style.btn}
                        handleOnClick={() => location.href = '../listPage'}
                    />
                </div>
            </div>
        </>
    )
}