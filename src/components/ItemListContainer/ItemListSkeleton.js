import React from 'react'
import { ItemSkeleton } from "./ItemSkeleton";

export const ItemListSkeleton = () => {
    return (
        <div className="ItemList">
            { Array(6).fill( <ItemSkeleton/> ) }
        </div>
    )
}
