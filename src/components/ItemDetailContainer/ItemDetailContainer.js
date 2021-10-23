import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from "./ItemDetail";
import { pedirItems } from "../../helpers/pedirItems";
import './ItemDetailContainer.scss';
import { ItemDetailSkeleton } from './ItemDetailSkeleton';
import { ThemeContext } from './../../context/ThemeContext';

export const ItemDetailContainer = () => {

    const {theme} = useContext(ThemeContext)

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
                loading ? <ItemDetailSkeleton/>
                : <ItemDetail {...item}/>
            }
        </section>
    )
}
