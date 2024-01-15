import Link from 'next/link'
import style from '@/styles/register/index.module.scss'
import { Button } from '@/components/template/Button'

export default function Register() {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.linkBox}>
                    <Link href={''} className={style.link}> ＜戻る</Link>
                </div>
                <div className={style.trainContents}>
                    <div className={style.trainBox}>
                        <p className={style.trainText}>茨木市<span>→</span>大阪梅田</p>
                    </div>
                    <div className={style.trainData}>
                        <p>1/12(金)</p>
                        <p className={style.timeText}>
                            8:23
                            <span>→</span>
                            9:00
                            <span className={style.item}>(37分)</span>
                        </p>
                        <p>乗換1回<span>24.9km</span>620円</p>
                    </div>
                    <div className={style.btnBox}>
                        <Button text='1本前' className={style.btnAfter} />
                        <Button text='1本後' className={style.btnBefore} />
                    </div>
                    <div></div>
                </div>
                <div className={style.btnBox}>
                    <Button text='登録' className={style.btn} />
                </div>
            </div>
        </>
    )
}