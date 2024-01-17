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

    // 現在時刻を取得
    const now = dayjs()

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
                                time: '05:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:05',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:10',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:15',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                        ]
                    },
                    {
                        homeName: '十三',
                        some: [
                            {
                                time: '05:05:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:10:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:15:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                            {
                                time: '05:20:00',
                                train: '普通',
                                direction: '京都河原町行き'
                            },
                        ]
                    }
                ]
            }
        ]
    })

    // カウントダウンのデータを所持するための値
    const [min, setMin] = useState(0)// 分
    const [sec, setSec] = useState(0)// 秒


    // 現在の月、日、曜日を取得
    const Year = dayjs().get('year')
    const Month = dayjs().get('M') + 1
    const Day = dayjs().get('D')
    const week = dayjs().get('d')

    // 指定の時刻
    const time = data.routes.map((v, idx) => v.homes.map((x, idx2) => x.some.map((z, idx3) => {
        const targetTime = dayjs(`${Year}-${Month}-${Day} ${z.time}`)
        const calcTime = targetTime.diff(now)
        return calcTime
    }
    )))

    console.log(time);


    useEffect(() => {

        setMin(Number(dayjs(time).format('mm')))
        setSec(Number(dayjs(time).format('ss')))

    }, [min, sec])



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