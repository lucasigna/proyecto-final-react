import React,{useContext} from 'react'
import Skeleton from '@material-ui/core/Skeleton';
import { ThemeContext } from './../../context/ThemeContext';

export const ItemDetailSkeleton = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? 'ItemDetail skeletonLight' : 'ItemDetail skeletonDark'}>
            <div className="div1">
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="text" width={180} height={50}/>
                <Skeleton variant="rectangular" width={300} height={40} />
            </div>
            <div className="div2">
                <Skeleton variant="text" width={400} height={50}/>
                <Skeleton variant="text" width={300} height={25}/>
                <Skeleton variant="text" width={220} height={25}/>
                <Skeleton variant="text" width={300} height={25}/>
                <Skeleton variant="text" width={250} height={25}/>
            </div>
            <div className="div3">
                <Skeleton variant="text" width={180} height={35}/>
                <Skeleton variant="text" width={180} height={35}/>
                <Skeleton variant="text" width={180} height={35}/>
            </div>
        </div>
    )
}
