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

    const [flg, setFlg] = useState(false)

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
                    <div className={style.tabBox}>
                        <div className={style.tabs}>
                            <button
                                className={flg === false ? style.tabsSuc : style.tabsBtn}
                                onClick={() => setFlg(false)}
                            >遅延・運休</button>
                            <button
                                className={flg === false ? style.tabsBtn : style.tabsSuc}
                                onClick={() => setFlg(true)}
                            >振替案</button>
                        </div>
                        <div className={style.messageBox}>
                            {flg === false ?
                                <div className={style.message}>
                                    <p>遅延はありません</p>
                                </div>
                                :
                                <div className={style.message}>
                                    <p>振替案はこちらです</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={style.timeDown}>
                    <div className={style.dateTime}>
                        {/* 電車が出発する日付と時間 */}
                        <p>11/2(木)</p>
                        <p>8時23分</p>
                    </div>
                    <p className={style.text}>大阪・神戸方面</p>
                    <div className={style.timeClock}>
                        {/* タイムダウンするロジックを作成する 現在時刻から発車するまでの時間を算出する */}
                        <span>＜</span>
                        <p>
                            <span className={style.bold}>13</span>
                            分
                            <span className={style.bold}>32</span>
                            秒
                        </p>
                        <span>＞</span>
                    </div>
                    <p className={style.textBold}>先発</p>
                </div>
            </div>
        </>
    )
}