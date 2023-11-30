import { useState } from 'react'
import { RouteList } from '@/components/common/RouteList'

export default function Sample03() {

    const [showRouteList, setShowRouteList] = useState(false)
    return (
        <>
            <button onClick={() => setShowRouteList(!showRouteList)}>test</button>
            {showRouteList && <RouteList />}
        </>
    )
}