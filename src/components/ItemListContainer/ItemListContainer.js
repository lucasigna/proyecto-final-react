import React,{useEffect,useState,useContext} from 'react'
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { ItemListSkeleton } from "./ItemListSkeleton";
import { pedirItems } from "../../helpers/pedirItems";
import { ThemeContext } from './../../context/ThemeContext';


export const ItemListContainer = () => {

    const {theme} = useContext(ThemeContext)

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
            <h2 className={theme ? 'light' : 'dark'}>Nuestros productos</h2>
            { loading 
            ? <ItemListSkeleton/>
            : <ItemList items={items} theme={theme}/>}
        </div>
    )
}
