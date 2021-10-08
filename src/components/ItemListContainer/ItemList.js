import React from 'react'
import { Item } from "./Item";

export const ItemList = ({items,theme}) => {

    return (
        <div className="ItemList">
            { items.map( (item) => <Item {...item} key={item.id} theme={theme} />)}
        </div>
    )
}
