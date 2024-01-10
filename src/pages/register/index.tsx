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
                        <p>茨木市</p>
                        <span>→</span>
                        <p>大阪梅田</p>
                    </div>
                </div>
                <div className={style.btnBox}>
                    <Button text='登録' className={style.btn} />
                </div>
            </div>
        </>
    )
}