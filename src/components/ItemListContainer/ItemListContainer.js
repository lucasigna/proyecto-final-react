import React,{useEffect,useState} from 'react'
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { ItemListSkeleton } from "./ItemListSkeleton";
import { pedirItems } from "../../helpers/pedirItems";


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirItems()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className="ItemListContainer">
            <h2>Nuestros productos</h2>
            { loading 
            ? <ItemListSkeleton/>
            : <ItemList items={items}/>}
        </div>
    )
}
