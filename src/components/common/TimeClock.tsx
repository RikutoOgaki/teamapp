import { useState, useEffect } from 'react'
import style from '@/styles/components/common/timeclock.module.scss'
import dayjs from 'dayjs'

import { TrainData } from '@/types/TrainData'


type State = {
    routes: Array<TrainData>
}

type TrainData = {
    id: number,
    routeName: string,
    homes: Array<HomeData>
}

type HomeData = {
    homeName: string,
    some: Array<SomeData>
}

type SomeData = {
    time: string,
    train: string,
    direction: string
}

export function TimeClock() {


    // 現在の月、日、曜日を取得
    const Year = dayjs().get('year')
    const Month = dayjs().get('M') + 1
    const Day = dayjs().get('D')
    const week = dayjs().get('d')

    // 現在のカウントダウン対象の time とそのインデックス
    const [current, setCurrent] = useState({ index: 0, time: TrainData.routes[0].homes[0].some[0].time });

    // カウントダウンの残り時間（秒）
    const [countdown, setCountdown] = useState(dayjs(`${Year}-${Month}-${Day} ${current.time}`).diff(dayjs(), 'second'));

    useEffect(() => {
        // カウントダウンが0になったら、次の time をカウントダウン対象にする
        if (countdown <= 0) {
            const nextIndex = current.index + 1;
            const nextTime = TrainData.routes[0].homes[0].some[nextIndex].time;
            setCurrent({ index: nextIndex, time: nextTime });
            setCountdown(dayjs(`${Year}-${Month}-${Day} ${nextTime}`).diff(dayjs(), 'second'));
        }
    }, [countdown]);

    useEffect(() => {
        // 1秒ごとにカウントダウンを更新する
        const intervalId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        // コンポーネントがアンマウントされたら、インターバルをクリアする
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const min = Math.floor(countdown / 60)
    const sec = countdown % 60

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
                    <p>{current.time}発</p>
                </div>
                <p className={style.text}></p>
                <div className={style.timeClock}>
                    {/* タイムダウンするロジックを作成する 現在時刻から発車するまでの時間を算出する */}
                    <span>＜</span>
                    <p>
                        <span className={style.bold}>{min}</span>
                        分
                        <span className={style.bold}>{sec}</span>
                        秒
                    </p>
                    <span>＞</span>
                </div>
                <p className={style.textBold}>先発</p>
            </div>
        </>
    )
}