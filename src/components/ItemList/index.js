import React from 'react'
import Item from '../Item'
import { ItemListStyle } from './styles'
const ItemList = ({data}) => {
    return(
        <ItemListStyle>
            {data.map( item => {return (<Item key={item.id} stock={item.stock}>{item.name}</Item>)} )}
        </ItemListStyle>
    )
}
export default ItemList