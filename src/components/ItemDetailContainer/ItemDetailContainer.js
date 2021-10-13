import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from "./ItemDetail";
import { pedirItems } from "../../helpers/pedirItems";
import './ItemDetailContainer.scss';
import { ItemDetailSkeleton } from './ItemDetailSkeleton';

export const ItemDetailContainer = ({theme}) => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirItems()
            .then((res) => {
                setItem( res.find( prod => prod.id === Number(itemId)) )
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <section className={theme ? 'ItemDetailContainer light' : 'ItemDetailContainer dark'}>
            {
                loading ? <ItemDetailSkeleton theme={theme}/>
                : <ItemDetail theme={theme} {...item}/>
            }
        </section>
    )
}
