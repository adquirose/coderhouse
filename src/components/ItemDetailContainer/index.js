import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import { items } from '../../constants/items'
import Loader from '../Loader'
import { ItemListContainerStyle } from '../ItemListContainer/styles'

function ItemDetailContainer(){
    const { id } = useParams() 
    const [dataItem, setDataItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const getItem = (idx) => {
        return(
            new Promise( (resolve, reject) => {
                setIsLoading(true)
                setTimeout(() => {
                    resolve(items[idx-1])
                }, 2000)
            })
        )
    }
    useEffect(() => {
        getItem(id)
            .then(resp => {
                setDataItem(resp)
                setIsLoading(false)
            })
    },[id])

    return(
        <ItemListContainerStyle>
            { isLoading && <Loader/> }
            { !isLoading && dataItem && <ItemDetail {...dataItem} /> }
        </ItemListContainerStyle>
    )
}
export default ItemDetailContainer