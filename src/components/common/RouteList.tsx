// import { useState } from 'react'
// import style from '@/styles/components/common/routelist.module.scss'
// import switch_arrow from '@/public/img/switchArrow.png'
// import Image from 'next/image'

// type RouteListProps = {
//     onCloseSample: () => void;
// };

// export function RouteList({ onCloseSample }: RouteListProps) {

//     const [route, setRoute] = useState({
//         route: [
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '神戸'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '近鉄奈良'
//             },
//             {
//                 routenum: 0,
//                 starthome: '中崎町',
//                 endhome: '生駒'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '嵯峨嵐山'
//             }, {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '神戸'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '近鉄奈良'
//             },
//             {
//                 routenum: 0,
//                 starthome: '中崎町',
//                 endhome: '生駒'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '嵯峨嵐山'
//             }, {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '神戸'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '近鉄奈良'
//             },
//             {
//                 routenum: 0,
//                 starthome: '中崎町',
//                 endhome: '生駒'
//             },
//             {
//                 routenum: 0,
//                 starthome: '生駒',
//                 endhome: '嵯峨嵐山'
//             },
//         ]
//     })

//     return (
//         <>
//             {/* リストのトップ画面 */}
//             <div className={style.listTop}>
//                 <button className={style.closeBtn} onClick={onCloseSample}></button>
//                 <p>リスト</p>
//             </div>

//             <div className={style.listMain}>
//                 {route.route.map((v, idx) =>
//                     <>
//                         <div className={style.listContents}>
//                             <div key={idx} className={style.start}>
//                                 <p className={style.homeName}>{v.starthome}</p>
//                             </div>
//                             {/* <span className={style.arrowLeft}></span>
//                             <span className={style.arrowRight}></span> */}
//                             <div>
//                                 {/* <Image className={style.switchArrow} src={switch_arrow} alt='as'/> */}
//                             </div>
//                             <div key={idx} className={style.end}>
//                                 <p className={style.homeName}>{v.endhome}</p>
//                             </div>
//                             <span className={style.chevronRight}></span>
//                         </div>
//                     </>
//                 )}
//                 <div className={style.regiBg}>
//                     <div className={style.regiBtn}>
//                         <button>登録</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }