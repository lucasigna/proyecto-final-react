import React from 'react'
import Skeleton from '@material-ui/core/Skeleton'

export const ItemSkeleton = () => {
    return (
        <div className="item itemSkeleton">
            <Skeleton variant="rectangular" height={250} />
            <Skeleton className="skeletonText" variant="text" width={180} height={25}/>
            <Skeleton className="skeletonText" variant="text" width={100} height={30}/>
        </div>
    )
}
