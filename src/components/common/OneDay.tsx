import { useState } from 'react'
import style from '@/styles/components/common/oneday.module.scss'

export function OneDay() {

    return (
        <>
            <div className={style.returnBtn}>
                <div className={style.chevronLeft}></div>
                <div className={style.returnTxt}>戻る</div>
            </div>
            <div className={style.startHome}>
                <p>出発駅</p>
                
            </div>
            <div className={style.endHome}>
                <p>到着駅</p>

            </div>
        </>
    )
}
