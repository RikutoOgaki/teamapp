import { useState, useEffect } from 'react'
import style from '@/styles/Home/index.module.scss'

// 一番見るページになる

export default function Home() {
    return (
        <>
            <div className={style.homeWrap}>
                <div className={style.myRoute}>
                    <div className={style.subMyRoute}>

                    </div>
                </div>
                <div className={style.transferPlan}>

                </div>
                <div className={style.timeDown}>

                </div>
            </div>
        </>
    )
}