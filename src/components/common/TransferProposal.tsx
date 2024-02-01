import style from '@/styles/components/common/transferproposal.module.scss'
import { FaX, FaChevronRight } from 'react-icons/fa6'

type Props = {
    onClose: () => void
}

export function TransferProposal(props: Props) {


    return (
        <>
            <div className={style.transferProposalWrap}>
                <div className={style.homeNameBox}>
                    <p>JR大阪環状線</p>
                    <div className={style.close} onClick={() => props.onClose()}>
                        <FaX className={style.icon} />
                    </div>
                </div>
                <div className={style.delayBox}>
                    <p className={style.delayIcon}>△</p>
                    <p className={style.delayText}>遅延が発生しています</p>
                    <p className={style.subText}>森ノ宮駅〜京橋駅間</p>
                </div>
                <div className={style.contentBox}>
                    <div className={style.content}>
                        <p className={style.delay}>遅れ</p>
                        <p className={style.timeText}>最大３０分</p>
                    </div>
                    <div className={style.content}>
                        <p className={style.delay}>原因</p>
                        <p className={style.timeText}>車両点検</p>
                    </div>
                </div>
                <div className={style.hurikaeWrap}>
                    <div className={style.hurikaeBox}>
                        <p>振替案</p>
                    </div>
                    <div className={style.hurikaeContent}>
                        <div className={style.hurikaeCon}>
                            <div className={style.textBox}>
                                <p>8:30分→8:40分</p>
                                <p>190円/乗換なし</p>
                                <p>OsakaMetoro長堀鶴見緑地線</p>
                            </div>
                            <FaChevronRight />
                        </div>
                        <div className={style.hurikaeCon}>
                            <div className={style.text}>
                                <p className={style.time}>8:40分→8:50分</p>
                                <p className={style.yen}>190円/乗換なし</p>
                                <p className={style.route}>OsakaMetoro長堀鶴見緑地線</p>
                            </div>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}