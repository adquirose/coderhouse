import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import Loader from '../Loader'
import { ItemListContainerStyle } from './styles.js'
import { items } from '../../constants/items'
import { useParams } from 'react-router-dom'

function ItemListContainer(){
    const { id } = useParams()
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
            !id ? setData(res)  : setData(res.filter(item => item.category === id))
            setIsLoading(false) 
        })
        .catch(error => {
            setIsLoading(false)
            console.log(`ha ocurrido un error ${error}`)
        })
    },[id])

    return(
        <ItemListContainerStyle>
            { isLoading && <Loader/> }
            { !isLoading && data.length && <ItemList data={data} /> }
        </ItemListContainerStyle>
    )
}
export default ItemListContainer