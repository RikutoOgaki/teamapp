import style from '@/styles/weekPage/index.module.scss'
import Link from 'next/link'
import { WeekData } from '@/types/WeekData'

export default function WeekPage() {

    return (
        <>
            <div className={style.wrap}>
                <div className={style.linkBox}>
                    <Link href={'../Home'} className={style.link}> ＜戻る</Link>
                </div>
                <div className={style.listBox}>
                    {WeekData.map((v, idx) =>
                        <div key={idx} className={style.dayList}>
                            <div className={style.day}>
                                <p
                                    style={v.weekNum === 0 ? { backgroundColor: '#A64646' } : v.weekNum === 6 ? { backgroundColor: '#4655A6' } : { backgroundColor: '#46A667' }}
                                    className={style.dayText}
                                >{
                                        v.weekNum === 0 ? '日' :
                                            v.weekNum === 1 ? '月' :
                                                v.weekNum === 2 ? '火' :
                                                    v.weekNum === 3 ? '水' :
                                                        v.weekNum === 4 ? '木' :
                                                            v.weekNum === 5 ? '金' :
                                                                v.weekNum === 6 ? '土' : undefined
                                    }</p>
                            </div>
                            <div className={style.home}>
                                <p>{v.startHome}</p>
                                <span>←</span>
                                <p>{v.endHome}</p>
                                <span>＞</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}