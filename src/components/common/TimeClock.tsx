import { useState, useEffect } from 'react'
import style from '@/styles/components/common/timeclock.module.scss'
import dayjs from 'dayjs'


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

    // 電車の仮データ
    const [data, setData] = useState<State>({
        routes: [
            {
                id: 1,
                routeName: '阪急京都本線',
                homes: [
                    {
                        homeName: '大阪梅田',
                        some: [
                            {
                                time: '12:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:05',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:10',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:15',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:20',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:25',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:30',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:35',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:40',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:45',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:50',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:55',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '13:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '13:05',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '13:10',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '13:15',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                        ]
                    },
                    {
                        homeName: '十三',
                        some: [
                            {
                                time: '12:05',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:10',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:15',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '12:20',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                        ]
                    }
                ]
            }
        ]
    })


    // 現在の月、日、曜日を取得
    const Year = dayjs().get('year')
    const Month = dayjs().get('M') + 1
    const Day = dayjs().get('D')
    const week = dayjs().get('d')

    // 現在のカウントダウン対象の time とそのインデックス
    const [current, setCurrent] = useState({ index: 0, time: data.routes[0].homes[0].some[0].time });

    // カウントダウンの残り時間（秒）
    const [countdown, setCountdown] = useState(dayjs(`${Year}-${Month}-${Day} ${current.time}`).diff(dayjs(), 'second'));

    useEffect(() => {
        // カウントダウンが0になったら、次の time をカウントダウン対象にする
        if (countdown <= 0) {
            const nextIndex = current.index + 1;
            const nextTime = data.routes[0].homes[0].some[nextIndex].time;
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