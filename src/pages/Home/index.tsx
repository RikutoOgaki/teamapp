import { useState, useEffect } from 'react'
import style from '@/styles/Home/index.module.scss'
import { TimeClock } from '@/components/common/TimeClock'
import { FaListUl, FaPlus, FaRegFileAlt } from 'react-icons/fa'
import { CiMemoPad } from "react-icons/ci"
import { FaTrainSubway } from 'react-icons/fa6';
import { Modal } from '@/components/common/Modal'
import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import lateCaution from '@/public/img/late_caution.png'
import { TransferProposal } from '@/components/common/TransferProposal'

import { WeekData } from '@/types/WeekData'

// 一番見るページになる

export default function Home() {

    // １週間の曜日を一致させるためのデータ
    const weekDay = dayjs().get('d')

    // 1週間のダミーデータ
    const [week, setWeek] = useState({
        route: [
            {
                weeknum: 0,
                starthome: '',
                endhome: ''
            },
            {
                weeknum: 1,
                starthome: '大阪',
                endhome: '生駒'
            },
            {
                weeknum: 2,
                starthome: '大阪',
                endhome: '生駒'
            },
            {
                weeknum: 3,
                starthome: '大阪',
                endhome: '生駒'
            },
            {
                weeknum: 4,
                starthome: '大阪',
                endhome: '生駒'
            },
            {
                weeknum: 5,
                starthome: '大阪',
                endhome: '生駒'
            },
            {
                weeknum: 6,
                starthome: '',
                endhome: ''
            },
        ]
    })

    // 遅延・運休と振替案の表示切替を行うflg
    const [flg, setFlg] = useState(false)

    // 今日の日付とその曜日を取得して、一致するweekの値を表示する
    // 必要な値
    // 現在時刻 電車の出発時間 カウントダウンタイマーの実装


    // 登録画面とリスト画面がでてくるためのstate管理
    const [showmove, setShowmove] = useState({
        list: false,
        registration: false
    })


    const [modal, setModal] = useState(false)

    const [modaldisplay, setModalDisplay] = useState(false)

    useEffect(() => {
        if (!modaldisplay) {
            setModal(true)
            setModalDisplay(true)
        }
    }, [modaldisplay])

    const closeModal = () => {
        setModal(false)
    }


    // ランダムで１分から１時間で通知を実装している
    // const ModalRandom = () => {
    //     const [showModal, setShowModal] = useState(false);

    //     useEffect(() => {
    //         const showRandomNotification = () => {
    //             const randomTime = Math.floor(Math.random() * (10 * 60 * 1000)) + 60 * 1000; // ランダムな時間（1ミリ秒から10分まで）

    //             setTimeout(() => {
    //                 setShowModal(true); // モーダルを表示
    //                 showRandomNotification(); // 次の通知をスケジュール
    //             }, randomTime);
    //         };

    //         showRandomNotification(); // 最初の通知をスケジュール
    //     }, []);

    //     const closeModal = () => {
    //         setShowModal(false);
    //     }

    // 振替案の提示state
    const [compo, setCompo] = useState(false)

    function Closed() {
        setCompo(false)
        setFlg(false)
    }

    return (
        <>
            {/* 遅延通知用のModalComponent */}
            {modal &&
                <Modal boolean={modal}>
                    <div className={style.modalBox}>
                        <div className={style.top}>
                            <span className={style.clsBtnFrame} onClick={() => closeModal()}></span>
                            <span className={style.icon} onClick={() => closeModal()}></span>
                            {/* <FaPlus
                                className={style.icon}
                                onClick={() => closeModal()}
                            /> */}
                            <p className={style.text}>通知</p>
                        </div>
                        <div className={style.contents}>
                            <div className={style.imgBox}>
                                <div className={style.textBox}>
                                    <div className={style.big}>
                                        <Image className={style.lateCaution} src={lateCaution} alt='警告マーク' />
                                        <p>遅れが発生しています。</p>
                                    </div>
                                    <p className={style.small}>
                                        8:04頃 阪急京都本線<br />
                                        上新庄〜淡路駅間で<br />
                                        路線トラブルが発生
                                    </p>
                                    <p className={style.minute}>約<span>20</span>分</p>
                                    <p className={style.small}>の遅れが出ています。</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.bottom}></div>
                    </div>
                </Modal>
            }
            {!compo &&
                <div className={style.homeWrap}>
                    <div className={style.myRoute}>
                        {WeekData.map((v, idx) =>
                            v.weekNum === weekDay ?
                                <div key={idx} className={style.subMyRoute}>
                                    <div className={style.start}>
                                        <p className={style.label}>出発駅</p>
                                        <p className={style.homeName}>{v.startHome}</p>
                                    </div>
                                    <span className={style.span}>経由駅</span>
                                    <div className={style.end}>
                                        <p className={style.label}>到着駅</p>
                                        <p className={style.homeName}>{v.endHome}</p>
                                    </div>
                                </div> : null
                        )}
                        <div className={style.link}>

                            <Link href={'../listPage'} className={style.linkBox}>
                                <div
                                    className={style.listIconBox}
                                // 自分が登録したリスト表示の下から画面が出てくる
                                // onClick={}
                                >
                                    <FaRegFileAlt className={style.fileIcon} />
                                </div>

                            </Link>

                            <Link href={'../search'} className={style.linkBox}>
                                <div
                                    className={style.addTrainIconBox}
                                // 決まった日の電車を登録する画面がでてくる
                                // onCLick={}
                                >
                                    <FaRegFileAlt className={style.addTrainIcon} />
                                    <FaPlus className={style.plus} />

                                </div>
                            </Link>

                            <Link href={'../weekPage'} className={style.linkBox}>
                                <div className={style.weekIconBox}>
                                    <CiMemoPad className={style.weekMemo} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.transferPlan}>
                        <div className={style.tabBox}>
                            <div className={style.tabs}>
                                <button
                                    className={flg === false ? style.tabsSuc : style.tabsBtn}
                                    onClick={() => setFlg(false)}
                                >遅延・運休</button>
                                <button
                                    className={flg === false ? style.tabsBtn : style.tabsSuc}
                                    onClick={() => {
                                        setFlg(true)
                                        setCompo(true)
                                    }}
                                >振替案</button>
                            </div>
                            <div className={style.messageBox}>
                                {flg === false ?
                                    <div className={style.message}>
                                        <p className={style.san}><span>△</span>約20分ほどの遅延があります。</p>
                                        {/* <p className={style.san}><span>△</span>１５分の遅延があります</p>
                                    <p className={style.batu}><span>✗</span>運転見合わせ</p> */}
                                    </div>
                                    :
                                    <div className={style.message}>
                                        <p>振替案はこちらです</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <TimeClock />
                </div>
            }
            {compo &&
                <TransferProposal onClose={Closed} />
            }
        </>
    )
}