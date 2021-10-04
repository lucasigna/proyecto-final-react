import { items } from "../data/items"


export const pedirItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(items)
        }, 5000)

    })
}