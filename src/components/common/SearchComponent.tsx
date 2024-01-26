import { useState, useEffect } from 'react'
import style from '@/styles/components/common/searchComponent.module.scss'
import { Button } from '@/components/template/Button'
import Link from 'next/link'


type Props = {
    starthome: string,// 出発駅
    endhome: string,// 到着駅
    weeknum: number,// 曜日識別番号
}

export function SearchComponent(props: Props) {

    const [state, setState] = useState<Props>({
        starthome: props.starthome,
        endhome: props.endhome,
        weeknum: props.weeknum
    })

    useEffect(() => {
        setState({
            ...state,
            starthome: props.starthome,
            endhome: props.endhome,
            weeknum: props.weeknum
        })
    }, [props])

    return (
        <>
            {state.weeknum === null || undefined &&
                <div>

                </div>
            }

            {state.weeknum === 0 || 1 || 2 || 3 || 4 || 5 || 6 &&
                <div>

                </div>
            }
        </>
    )
}