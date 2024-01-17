import { useState } from 'react'
import { OneDay } from '@/components/common/OneDay'
import style from '@/styles/components/common/oneday.module.scss'
import switchArrow from '@/public/img/switchArrow.svg'
import Image from 'next/image'

export default function Sample04() {

    const [state, setState] = useState();

    return (
        <>
            <div className={style.container}>
                <div className={style.return}>
                    <a href="">
                        <span className={style.chevronLeft}></span>
                        <p>戻る</p>
                    </a>
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
            </div>

        </>
    )
}