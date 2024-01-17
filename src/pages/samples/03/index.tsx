import { useState } from 'react'
import { RouteList } from '@/components/common/RouteList'

export default function Sample03() {

    const [showRouteList, setShowRouteList] = useState(false);

    const handleCloseSample = () => {
        setShowRouteList(false);
    };

    return (
        <>
            {!showRouteList && (
                <button onClick={() => setShowRouteList(true)}>test</button>
            )}
            {showRouteList && (
                <RouteList onCloseSample={handleCloseSample} />
            )}
        </>
    );
}