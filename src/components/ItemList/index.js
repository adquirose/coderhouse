import React, { useState, useEffect } from 'react'
import Item from '../Item'
import { ItemListStyle, ItemListContainerStyle } from './styles'
import Loader from '../Loader'
const items = [
    {
        id:1,
        name:"Canelo",
        stock:54
    },
    {
        id:2,
        name:"Cipres",
        stock:5
    },
    {
        id:3,
        name:"Alerce",
        stock:3
    },
    {
        id:4,
        name:"Raulí",
        stock:4
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
            { isLoading && <Loader/> }
            { !isLoading && data.length && <ItemList data={data} /> }
        </ItemListContainerStyle>
    )
}
const ItemList = ({data}) => {
    return(
        <ItemListStyle>
            { data.map( item => <Item key={item.id} stock={item.stock}>{item.name}</Item>) }
        </ItemListStyle>
    )
}
export default ItemListContainer