import style from '@/styles/listPage/index.module.scss'
import { useState } from 'react'

export default function ListPage() {


    const [route, setRoute] = useState({
        route: [
            {
                routenum: 0,
                starthome: '大阪梅田',
                endhome: '十三'
            },
        ]
    })

    return (
        <>
            <div className={style.wrap}>
                {/* リストのトップ画面 */}
                <div className={style.listTop}>
                    <button className={style.closeBtn}
                        onClick={() => {
                            location.href = '../Home'
                            console.log('発火');
                        }}
                    ></button>
                    <p>リスト</p>
                </div>

                <div className={style.listMain}>
                    {route.route.map((v, idx) =>
                        <>
                            <div key={idx} className={style.listContents}>
                                <div key={idx} className={style.start}>
                                    <p className={style.homeName}>{v.starthome}</p>
                                </div>
                                {/* <span className={style.arrowLeft}></span>
                             <span className={style.arrowRight}></span> */}
                                <div>
                                    {/* <Image className={style.switchArrow} src={switch_arrow} alt='as'/> */}
                                </div>
                                <div className={style.end}>
                                    <p className={style.homeName}>{v.endhome}</p>
                                </div>
                                <span className={style.chevronRight}></span>
                            </div>
                        </>
                    )}
                    <div className={style.regiBg}>
                        <div className={style.regiBtn}>
                            <button>登録</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}