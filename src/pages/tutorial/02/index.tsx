import style from '@/styles/tutorial/02/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'

export default function Tutorial02() {
    return (
        <>
            <div
                className={style.homeWrap}
                onClick={() => location.href = '/tutorial/03'}
            >
                <div className={style.yesCoverTop}></div>
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
                {/* カバーをかける */}
                <div className={style.noCover}>
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
                    </div>
                </div>
                <TimeClock />
                <div className={style.yesCoverBottom}>
                    <div className={style.chat}>
                        <p>ここでは遅延・運休と振替案が表示されます。</p>
                    </div>
                </div>
            </div>
        </>
    )
}