import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import style from '@/styles/home.module.scss'

// ロード画面になるのでデータを完全取得するまで開いておく（dbなら）

// フロント実装なら、数秒後に遷移するようにする

export default function LoginForm() {

  return (
    <>
      <Head>
        <title>サービス名</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={style.topWrap}
        onClick={() => location.href = '/tutorial'}
      >
        <img className={style.left} src="/img/topleft.png" alt="left" />
        <img className={style.logo} src="/img/logo.png" alt="logo" />
        <img className={style.right} src="/img/topright.png" alt="right" />
      </div>

    </>
  )
}