import { useState, useEffect } from 'react'

    // link先を管理するstate
    const [link, setLink] = useState()

    // 今何個目のチュートリアルか管理するstate
    const [flg, setFlg] = useState(0)


    return (
        <>

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
                    </div>
                </div>
                {/* カバーをかける */}
                <div className={style.transferPlan}>
                    <div className={style.tabBox}>
                        <div className={style.tabs}>
                            <button
                                // className={flg === false ? style.tabsSuc : style.tabsBtn}
                                // onClick={() => setFlg(false)}
                                className={style.tabsSuc}
                            >遅延・運休</button>
                            <button
                                // className={flg === false ? style.tabsBtn : style.tabsSuc}
                                // onClick={() => setFlg(true)}
                                className={style.tabsBtn}
                            >振替案</button>
                        </div>
                        <div className={style.messageBox}>
                            <div className={style.message}>
                                <p>遅延はありません</p>
                            </div>
                        </div>
                    </div>
                    <TimeClock />
                </div>

                    </div>
                </div>
            </div>
        </>
    )
}