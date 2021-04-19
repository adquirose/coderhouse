import React, { useState, useEffect } from 'react'
import Item from '../Item'
import { ItemListStyle, ItemListContainerStyle } from './styles'
const items = [
    {
        id:1,
        name:"Arturo"
    },
    {
        id:2,
        name:"Andrea"
    },
    {
        id:3,
        name:"Violeta"
    },
    {
        id:4,
        name:"Olimpia"
    },
    {
        id:5,
        name:"Mila"
    }
]
function ItemListContainer(){

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)   
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setIsLoading(true)
            setTimeout(() => {
                // reject('error en promesa')
                resolve(items)
            },2000)
        })
        task.then((res) => {
            setData(res)
            setIsLoading(false)
            console.log('se han recibido los datos')
        })
        .catch(err => {
            setIsLoading(false)
        })
    },[])
    
    return(
        <ItemListContainerStyle>
            { isLoading && <p>Cargando...</p> }
            { !isLoading && data.length && <ItemList data={data} /> }
        </ItemListContainerStyle>
    )
}
const ItemList = ({data}) => {
    return(
        <ItemListStyle>
            { data.map( item => <Item key={item.id}>{item.name}</Item>) }
        </ItemListStyle>
    )
}
export default ItemListContainer