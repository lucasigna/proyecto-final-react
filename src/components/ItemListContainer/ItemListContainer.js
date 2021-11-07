import React,{useEffect,useState,useContext} from 'react'
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { ItemListSkeleton } from "./ItemListSkeleton";
import { ThemeContext } from './../../context/ThemeContext';
import { getFirestore } from './../../firebase/config';
import { FilterContext } from './../../context/FilterContext';
import { ItemsNotFound } from './ItemsNotFound';


export const ItemListContainer = () => {

    const {theme} = useContext(ThemeContext)
    const {apply,range} = useContext(FilterContext)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore();
        const productos = db.collection("productos");

        productos.get()
        .then( (resp) => {
            const prods = resp.docs.map( (doc) => doc.data());
            const filteredProds = prods.filter( (prod) => {

                if( apply.range[0] <= prod.range && apply.range[1] >= prod.range && apply.price[0] <= prod.price && apply.price[1] >= prod.price && apply.power[0] <= prod.power && apply.power[1] >= prod.power ) {

                    return prod;

                }

            });
            setItems(filteredProds)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
        

    }, [apply])

    return (
        <div className="ItemListContainer">
            <h2 className={theme ? 'light' : 'dark'}>Nuestros productos</h2>
            { loading 
            ? <ItemListSkeleton/>
            :  
            items.length > 0 ? 
                <ItemList items={items} theme={theme}/>
                :
                <ItemsNotFound/>
             
                
            }
        </div>
    )
}
