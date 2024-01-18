import { useState, useEffect } from 'react'
import style from '@/styles/tutorial/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'
import { FaListUl, FaPlus, FaRegFileAlt } from 'react-icons/fa'
import { CiMemoPad } from "react-icons/ci"
import Link from 'next/link'

import { Button } from '@/components/template/Button'


export default function Tutorial() {

    // 画面切り替え用のstate
    const [state, setState] = useState(0)

    // １週間の表示用配列
    const week = [0, 1, 2, 3, 4, 5, 6]


    console.log(state);


    return (
        <>
            {
                state === 3 ? null
                    : state === 4 ? null
                        : state === 5 ? null :

                            <div
                                className={style.homeWrap}
                                onClick={() => {
                                    setState(state + 1)
                                }}
                            >
                                {state === 1 ?
                                    <div className={style.coverTop}></div> : undefined
                                },
                                {
                                    state === 2 ?
                                        <div className={style.coverBigTop}>
                                            <p className={style.chat}>
                                                ここでは登録された時間の<br />
                                                タイマーが表示されます。
                                            </p>
                                        </div> :
                                        undefined
                                }
                                <div className={style.myRoute}>
                                    <div className={style.subMyRoute}>
                                        <div className={style.start}>
                                            <p className={style.label}>出発駅</p>
                                            <p className={style.homeName}></p>
                                        </div>
                                        <span className={style.span}>経由駅</span>
                                        <div className={style.end}>
                                            <p className={style.label}>到着駅</p>
                                            <p className={style.homeName}></p>
                                        </div>
                                    </div>
                                    <div className={style.link}>
                                        <Link href={''} className={style.linkBox}>
                                            <div
                                                className={style.listIconBox}
                                            // 自分が登録したリスト表示の下から画面が出てくる
                                            // onClick={}
                                            >
                                                <FaRegFileAlt className={style.fileIcon} />
                                            </div>
                                        </Link>

                                        <Link href={''} className={style.linkBox}>
                                            <div
                                                className={style.addTrainIconBox}
                                            // 決まった日の電車を登録する画面がでてくる
                                            // onCLick={}
                                            >
                                                <FaRegFileAlt className={style.addTrainIcon} />
                                                <FaPlus className={style.plus} />

                                            </div>
                                        </Link>

                                        <Link href={'../weekPage'} className={style.linkBox}>
                                            <div className={style.weekIconBox}>
                                                <CiMemoPad className={style.weekMemo} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={style.transferPlan}>
                                    <div className={style.tabBox}>
                                        <div className={style.tabs}>
                                            <button
                                                className={style.tabsSuc}
                                            // onClick={() => setFlg(false)}
                                            >遅延・運休</button>
                                            <button
                                                className={style.tabsBtn}
                                            // onClick={() => setFlg(true)}
                                            >振替案</button>
                                        </div>
                                        <div className={style.messageBox}>
                                            <div className={style.message}>
                                                <p className={style.maru}><span>◯</span>遅延はありません</p>
                                                {/* <p className={style.san}><span>△</span>１５分の遅延があります</p>
                                    <p className={style.batu}><span>✗</span>運転見合わせ</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <TimeClock />

                                {state === 0 ?
                                    <div className={style.coverBottom}>
                                        <p className={style.chat}>
                                            ここでは遅延、運休と振替案が表示されます。
                                        </p>
                                    </div> :
                                    undefined
                                }

                                {state === 1 ?
                                    <div className={style.coverBigBottom}>
                                        <p className={style.chat}>
                                            出発駅と到着駅をタップし<br />
                                            駅を入力してください。
                                        </p>
                                    </div> :
                                    undefined
                                }
                            </div>
            }

            {state === 3 ?
                <div
                    className={style.listWrap}
                    onClick={() => setState(state + 1)}
                >
                    <div className={style.listTop}>
                        <button className={style.closeBtn} ></button>
                        <p>リスト</p>
                    </div>

                    <div className={style.listMain}>

                        <p className={style.chat}>
                            ここでは検索履歴の<br />
                            リスト表示がされます。
                        </p>

                        <div className={style.regiBg}>
                            <div className={style.regiBtn}>
                                <button>登録</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                undefined
            }

            {state === 4 ?
                <div
                    className={style.weekWrap}
                    onClick={() => setState(state + 1)}
                >

                    <div className={style.coverWeekTop}></div>

                    <div className={style.coverWeekBottom}>
                        <p className={style.chat}>
                            ここでは1週間の乗車時間を設定できます。
                        </p>
                    </div>

                    <div className={style.wrap}>
                        <div className={style.linkBox}>
                            <Link href={''} className={style.link}> ＜戻る</Link>
                        </div>
                        <div className={style.listBox}>
                            {week.map((v, idx) =>
                                <div key={idx} className={style.dayList}>
                                    <div className={style.day}>
                                        <p
                                            style={v === 0 ? { backgroundColor: '#A64646' } : v === 6 ? { backgroundColor: '#4655A6' } : { backgroundColor: '#46A667' }}
                                            className={style.dayText}
                                        >{
                                                v === 0 ? '日' :
                                                    v === 1 ? '月' :
                                                        v === 2 ? '火' :
                                                            v === 3 ? '水' :
                                                                v === 4 ? '木' :
                                                                    v === 5 ? '金' :
                                                                        v === 6 ? '土' : undefined
                                            }</p>
                                    </div>
                                    <div className={style.home}>
                                        <p>{ }</p>
                                        <span>←</span>
                                        <p>{ }</p>
                                        <span>＞</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div> :
                undefined
            }

            {state === 5 ?
                <div className={style.lastWrap}>
                    <figure>
                        <img src="/img/logo.png" alt="logo" />
                    </figure>
                    <Button
                        text='はじめる'
                        className={style.btn}
                        handleOnClick={() => location.href = '../Home'}
                    />
                </div> :
                undefined
            }
        </>
    )
}