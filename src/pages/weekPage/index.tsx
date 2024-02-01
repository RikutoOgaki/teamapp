import style from '@/styles/weekPage/index.module.scss'
import Link from 'next/link'
import { WeekData } from '@/types/WeekData'
import { useState, useEffect } from 'react'
import { Button } from '@/components//template/Button'

type State = {

}

export default function WeekPage() {

    const [serch, setSerch] = useState(false)

    const [weekState, setWeekState] = useState({
        weekroute: [
            {
                id: 1,// 配列番号
                weekNum: 0,// 曜日識別番号
                startHome: '',// 出発する駅名
                endHome: ''// 到着する駅名
            },
            {
                id: 2,
                weekNum: 1,
                startHome: '大阪',
                endHome: '生駒'
            },
            {
                id: 3,
                weekNum: 2,
                startHome: '大阪',
                endHome: '生駒'
            },
            {
                id: 4,
                weekNum: 3,
                startHome: '大阪',
                endHome: '生駒'
            },
            {
                id: 5,
                weekNum: 4,
                startHome: '大阪',
                endHome: '生駒'
            },
            {
                id: 6,
                weekNum: 5,
                startHome: '大阪',
                endHome: '生駒'
            },
            {
                id: 7,
                weekNum: 6,
                startHome: '',
                endHome: ''
            },
        ]
    })

    const SerchComponent = () => {

        // 検索したい駅名を保存するstate
        const [home, setHome] = useState({
            starthome: '',
            endhome: '',
            starttime: ''
        })

        // ボタンのデータを分けるためのstate
        const [state, setState] = useState(0);

        return (
            <>
                <div className={style.container}>
                    <div className={style.return}>
                        <div className={style.link} onClick={() => setSerch(false)}>
                            <span className={style.chevronLeft}>＜</span>
                            <p>戻る</p>
                        </div>
                    </div>
                    <div className={style.serchBox}>
                        <div className={style.startHome}>
                            <p>出発駅</p>
                            <input
                                type="text"
                                onChange={(e) => setHome({
                                    ...home,
                                    starthome: e.target.value
                                })}
                            />
                            {
                                <div className={style.resultBox}>
                                    <ul className={style.result}>
                                        <li className={style.resultItem}></li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <figure>
                            <img src={'/img/switchArrow.png'} alt="切り替え" />
                        </figure>
                        <div className={style.endHome}>
                            <p>到着駅</p>
                            <input
                                type="text"
                                value={home.endhome}
                                onChange={(e) => setHome({
                                    ...home,
                                    endhome: e.target.value
                                })}
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
                            onChange={(e) => setHome({
                                ...home,
                                starttime: e.target.value
                            })}
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

    return (
        <>
            {!serch &&
                <div className={style.wrap}>
                    <div className={style.linkBox}>
                        <Link href={'../Home'} className={style.link}> ＜戻る</Link>
                    </div>
                    <div className={style.listBox}>
                        {weekState.weekroute.map((v, idx) =>
                            <div key={idx} className={style.dayList}>
                                <div className={style.day}>
                                    <p
                                        style={v.weekNum === 0 ? { backgroundColor: '#A64646' } : v.weekNum === 6 ? { backgroundColor: '#4655A6' } : { backgroundColor: '#46A667' }}
                                        className={style.dayText}
                                    >{
                                            v.weekNum === 0 ? '日' :
                                                v.weekNum === 1 ? '月' :
                                                    v.weekNum === 2 ? '火' :
                                                        v.weekNum === 3 ? '水' :
                                                            v.weekNum === 4 ? '木' :
                                                                v.weekNum === 5 ? '金' :
                                                                    v.weekNum === 6 ? '土' : undefined
                                        }</p>
                                </div>
                                <div className={style.home}>
                                    <p>{v.startHome}</p>
                                    <span>→</span>
                                    <p>{v.endHome}</p>
                                    <span
                                        className={style.next}
                                        onClick={() => {
                                            setSerch(true)
                                            console.log('発火');
                                        }}
                                    >＞</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
            {serch &&
                <SerchComponent />
            }
        </>
    )
}