import { useState } from 'react'
import style from '@/styles/saech/index.module.scss'
import switchArrow from '@/public/img/switchArrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components//template/Button'
import { TrainData } from '@/types/TrainData'

export default function Search() {

    // 検索機能のためのデータ

    // 検索したい駅名を保存するstate
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')


    // ボタンのデータを分けるためのstate
    const [state, setState] = useState(0);

    return (
        <>
            <div className={style.container}>
                <div className={style.return}>
                    <Link href="../weekPage" className={style.link}>
                        <span className={style.chevronLeft}>＜</span>
                        <p>戻る</p>
                    </Link>
                </div>

                <div className={style.serchBox}>
                    <div className={style.startHome}>
                        <p>出発駅</p>
                        <input
                            type="text"
                            onChange={(e) => setStart(e.target.value)}
                        />
                    </div>
                    <figure>
                        <img src={'/img/switchArrow.png'} alt="切り替え" />
                    </figure>
                    <div className={style.endHome}>
                        <p>到着駅</p>
                        <input
                            type="text"
                            onChange={(e) => setStart(e.target.value)}
                        />
                    </div>
                </div>

                <div className={style.typeBox}>
                    <button
                        onClick={() => setState(0)}
                        className={state === 0 ? style.btnOn : style.btnOff}
                    >出発</button>
                    <button
                        onClick={() => setState(1)}
                        className={state === 1 ? style.btnOn : style.btnOff}
                    >到着</button>
                    <button
                        onClick={() => setState(2)}
                        className={state === 2 ? style.btnOn : style.btnOff}
                    >始発</button>
                    <button
                        onClick={() => setState(3)}
                        className={state === 3 ? style.btnOn : style.btnOff}
                    >終電</button>
                </div>

                <div className={style.dataTime}>
                    <input
                        type="date"
                        className={style.date}
                    />
                    <input
                        type="time"
                        className={style.time}
                        onChange={(e) => setEnd(e.target.value)}
                    />
                </div>

                <div className={style.btnBox}>
                    <Button
                        text='リセット'
                        className={style.reset}

                    />
                    <Button text='検索'
                        className={style.entry}
                        handleOnClick={() => location.href = '../register'}
                    />
                </div>
            </div>

        </>
    )
}