import { useState, useEffect } from 'react'
import style from '@/styles/components/common/timeclock.module.scss'
import dayjs from 'dayjs'

export function TimeClock() {

    // カウントダウンタイマーの実装
    // 0になったら、次発までの時間にしないといけない

    // 残り時間を、分秒に変え、表示する
    // 現在の時間
    const nowTime = dayjs()
    const nowFormat = dayjs(nowTime).format()
    // const now = dayjs(nowFormat).format('YYYY/MM/DD')

    console.log(nowFormat);



    // 現在の月、日、曜日を取得
    const Month = dayjs().get('M') + 1
    const Day = dayjs().get('D')
    const week = dayjs().get('d')


    const today = dayjs().unix();
    // console.log(today, Month, Day, week);



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
                    <p>8時23分発</p>
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
        </>
    )
}