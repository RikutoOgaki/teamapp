import style from '@/styles/weekPage/index.module.scss'
import Link from 'next/link'

export default function WeekPage() {


    // 1週間の表示用の簡易データ
    const week = [0, 1, 2, 3, 4, 5, 6]

    return (
        <>
            <div className={style.wrap}>
                <div className={style.linkBox}>
                    <Link href={''} className={style.link}> ＜戻る</Link>
                </div>
                <div className={style.listBox}>
                    {week.map((v, idx) =>
                        <div key={idx} className={style.dayList}>
                            <div className={style.day}>
                                <p
                                    style={v === 0 ? { backgroundColor: '#A64646' } : v === 6 ? { backgroundColor: '#4655A6' } : { backgroundColor: '#46A667' }}
                                    className={style.dayText}
                                >{
                                        v === 0 ? '日' :
                                            v === 1 ? '月' :
                                                v === 2 ? '火' :
                                                    v === 3 ? '水' :
                                                        v === 4 ? '木' :
                                                            v === 5 ? '金' :
                                                                v === 6 ? '土' : undefined
                                    }</p>
                            </div>
                            <div className={style.home}>
                                <p>{'大阪梅田'}</p>
                                <span>←</span>
                                <p>{'生駒'}</p>
                                <span>＞</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}