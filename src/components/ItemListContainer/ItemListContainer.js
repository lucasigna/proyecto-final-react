import React,{useEffect,useState,useContext} from 'react'
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { ItemListSkeleton } from "./ItemListSkeleton";
import { ThemeContext } from './../../context/ThemeContext';
import { getFirestore } from './../../firebase/config';


export const ItemListContainer = () => {

    const {theme} = useContext(ThemeContext)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore();
        const productos = db.collection("productos");

        productos.get()
        .then( (resp) => {
            const prods = resp.docs.map( (doc) => doc.data());
            setItems(prods)
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
