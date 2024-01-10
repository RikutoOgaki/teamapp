import { useState, useEffect } from 'react'
import style from '@/styles/components/common/timeclock.module.scss'
import dayjs from 'dayjs'

export function TimeClock() {

    // 電車の仮データ
    const [data, setData] = useState({
        rotes: [
            {
                id: 1,
                time: '11:45',
                some: '準特急',
                train: '大阪・神戸方面'
            },
            {
                id: 2,
                time: '11:49',
                some: '普通',
                train: '姫路方面'
            },
            {
                id: 3,
                time: '11:55',
                some: '準急',
                train: '奈良方面'
            },
        ]
    })

    // カウントダウンのデータを所持するための値
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)





    // 現在の月、日、曜日を取得
    const Month = dayjs().get('M') + 1
    const Day = dayjs().get('D')
    const week = dayjs().get('d')



    return (
        <>
            <div className={style.timeDown}>
                <div className={style.dateTime}>
                    {/* 電車が出発する日付と時間 */}
                    <p>
                        {Month}/{Day}
                        ({week === 0 ? '日'
                            : week === 1 ? '月'
                                : week === 2 ? '火'
                                    : week === 3 ? '水'
                                        : week === 4 ? '木'
                                            : week === 5 ? '金'
                                                : week === 6 ? '土' : undefined})
                    </p>
                    <p>発</p>
                </div>
                <p className={style.text}></p>
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
        </>
    )
}