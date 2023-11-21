import { useState, useEffect } from 'react'
import style from '@/styles/Home/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'
import { FaListUl, FaPlus } from 'react-icons/fa'
import { FaTrainSubway } from 'react-icons/fa6';
import dayjs from 'dayjs'

// 一番見るページになる

export default function Home() {

    // １週間の曜日を一致させるためのデータ
    const weekDay = dayjs().get('d')

    // 1週間のダミーデータ
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
                endhome: '京都'
            },
            {
                weeknum: 3,
                starthome: '北海道',
                endhome: '青森'
            },
            {
                weeknum: 4,
                starthome: '滋賀',
                endhome: '大阪'
            },
            {
                weeknum: 5,
                starthome: '奈良',
                endhome: '和歌山'
            },
            {
                weeknum: 6,
                starthome: '生駒',
                endhome: '大阪'
            },
        ]
    })

    // 遅延・運休と振替案の表示切替を行うflg
    const [flg, setFlg] = useState(false)

    // 今日の日付とその曜日を取得して、一致するweekの値を表示する
    // 必要な値
    // 現在時刻 電車の出発時間 カウントダウンタイマーの実装


    // 登録画面とリスト画面がでてくるためのstate管理
    const [showmove, setShowmove] = useState({
        list: false,
        registration: false
    })


    return (
        <>
            <div className={style.homeWrap}>
                <div className={style.myRoute}>
                    {week.route.map((v, idx) =>
                        v.weeknum === weekDay ?
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
                    <div className={style.link}>
                        <div
                            className={style.listIconBox}
                        // 自分が登録したリスト表示の下から画面が出てくる
                        // onClick={}
                        >
                            <FaListUl className={style.listIcon} />
                        </div>
                        <div
                            className={style.addTrainIconBox}
                        // 決まった日の電車を登録する画面がでてくる
                        // onCLick={}
                        >
                            <FaTrainSubway className={style.addTrainIcon} />
                            <FaPlus className={style.plus} />
                        </div>
                    </div>
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
                {/* <div className={style.timeDown}>
                    <div className={style.dateTime}>

                        <p>11/2(木)</p>
                        <p>8時23分</p>
                    </div>
                    <p className={style.text}>大阪・神戸方面</p>
                    <div className={style.timeClock}>

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
                </div> */}

                <TimeClock />
            </div>
        </>
    )
}

// リスト表示は下からのスライドで表示する
// 登録の方も動きは統一したほうが良い気がる