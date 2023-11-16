import { useState, useEffect } from 'react'
import style from '@/styles/Home/index.module.scss'

// 一番見るページになる

export default function Home() {


    const [test, setTest] = useState(0)
    const [week, setWeek] = useState({
        route: [
            {
                weeknum: 0,
                starthome: '奈良',
                endhome: '大阪'
            },
            {
                weeknum: 1,
                starthome: '大阪',
                endhome: '大阪'
            },
            {
                weeknum: 2,
                starthome: '生駒',
                endhome: '大阪'
            },
            {
                weeknum: 3,
                starthome: '生駒',
                endhome: '大阪'
            },
            {
                weeknum: 4,
                starthome: '生駒',
                endhome: '大阪'
            },
            {
                weeknum: 5,
                starthome: '生駒',
                endhome: '大阪'
            },
            {
                weeknum: 6,
                starthome: '生駒',
                endhome: '大阪'
            },
        ]
    })

    // 今日の日付とその曜日を取得して、一致するweekの値を表示する


    return (
        <>
            <div className={style.homeWrap}>
                <div className={style.myRoute}>
                    {week.route.map((v, idx) =>
                        v.weeknum === test ?
                            <div key={idx} className={style.subMyRoute}>
                                <div className={style.start}>
                                    <p className={style.label}>出発駅</p>
                                    <p className={style.homeName}>{v.starthome}</p>
                                </div>
                                <span className={style.span}>経由駅</span>
                                <div className={style.end}>
                                    <p className={style.label}>到着駅</p>
                                    <p className={style.homeName}>{v.endhome}</p>
                                </div>
                            </div> : null
                    )}
                </div>
                <div className={style.transferPlan}>

                </div>
                <div className={style.timeDown}>

                </div>
            </div>
        </>
    )
}