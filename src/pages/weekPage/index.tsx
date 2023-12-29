import style from '@/styles/weekPage/index.module.scss'
import Link from 'next/link'

export default function WeekPage() {


    // 1週間の表示用の簡易データ
    const week = [0, 1, 2, 3, 4, 5, 6]

    return (
        <>
            <div className={style.wrap}>
                <div className={style.link}>
                    <Link href={''}> ＜ 戻る</Link>
                </div>
                <div className={style.listBox}>
                    {week.map((v, idx) =>
                        <div>
                            <div>
                                <p>{ }</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}