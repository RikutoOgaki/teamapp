import { useState } from 'react'
import style from '@/styles/saech/index.module.scss'
import switchArrow from '@/public/img/switchArrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components//template/Button'

export default function Search() {

    const [state, setState] = useState();

    return (
        <>
            <div className={style.container}>
                <div className={style.return}>
                    <Link href="../weekPage" className={style.link}>
                        <span className={style.chevronLeft}>＜</span>
                        <p>戻る</p>
                    </Link>
                </div>

                <div className={style.search}>
                    <div className={style.startHome}>
                        <p>出発駅</p>
                        <input type="text" />
                    </div>
                    <span><Image src={switchArrow} alt="切り替え" /></span>
                    <div className={style.endHome}>
                        <p>到着駅</p>
                        <input type="text" />
                    </div>
                </div>

                <div>
                    <button>出発</button>
                    <button>到着</button>
                    <button>始発</button>
                    <button>終電</button>
                </div>

                <div>
                    <input type="date" />
                    <input type="time" />
                </div>

                <div>
                    <Button text='リセット' />
                    <Button text='登録' />
                </div>
            </div>

        </>
    )
}