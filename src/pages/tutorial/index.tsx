import { useState, useEffect } from 'react'
import style from '@/styles/tutorial/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'

export default function Tutorial() {

    // link先を管理するstate
    const [link, setLink] = useState()

    // 今何個目のチュートリアルか管理するstate
    const [flg, setFlg] = useState(0)
    // ０なら一個目のチュートリアル画面の表示
    // １なら二個目のチュートリアル画面の表示
    // ２なら三個目のチュートリアル画面の表示

    return (
        <>
            <div
                className={style.homeWrap}
                onClick={() => {
                    setFlg(flg + 1)
                    if (flg === 2) {
                        location.href = '/Home'
                    }
                }}
            >
                <div className={flg === 0 ? style.noCover : style.yesCover}>
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
                <div className={
                    flg === 0 ? style.yesCoverOne :
                        flg === 1 ? style.yesCoverTwo :
                            flg === 2 ? style.yesCoverThree :
                                ''
                }>
                    <div className={style.chat}>
                        {flg === 0 ?
                            <p>出発駅と到着駅をタップし<br />
                                駅を入力してください。
                            </p> :
                            flg === 1 ?
                                <p>出発駅と到着駅をタップし<br />
                                    駅を入力してください。
                                </p> :
                                flg === 2 ?
                                    <p>出発駅と到着駅をタップし<br />
                                        駅を入力してください。
                                    </p> :
                                    null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}