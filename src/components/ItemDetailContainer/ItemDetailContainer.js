import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss';
import { ItemDetailSkeleton } from './ItemDetailSkeleton';
import { ThemeContext } from './../../context/ThemeContext';
import { getFirestore } from './../../firebase/config';

export const ItemDetailContainer = () => {

    const {theme} = useContext(ThemeContext)

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore();
        const prod = db.collection("productos").doc(itemId);

        prod.get()
        .then( (resp) => {
            setItem(resp.data())
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
