import { useState, useEffect } from 'react'
import style from '@/styles/tutorial/01/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'

export default function Tutorial01() {

    // link先を管理するstate
    const [link, setLink] = useState()

    // 今何個目のチュートリアルか管理するstate
    const [flg, setFlg] = useState(0)

    return (
        <>
            <div
                className={style.homeWrap}
                onClick={() => location.href = '/tutorial/02'}
            >
                <div className={style.noCover}>
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
                <div className={style.yesCover}>
                    <div className={style.chat}>
                        <p>出発駅と到着駅をタップし<br />
                            駅を入力してください。
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}