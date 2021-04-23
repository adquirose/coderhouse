import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import Loader from '../Loader'
import { ItemListContainerStyle } from './styles.js'
import { items } from '../../constants/items'

function ItemListContainer(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const promesa = () => {
        return(
            new Promise((resolve, reject) => {
                setIsLoading(true)
                setTimeout(() => {
                    // reject('error en promesa')
                    resolve(items)
                },2000)
            })
        )
    } 
    useEffect(() => {
        promesa().then((res) => {
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
export default ItemListContainer