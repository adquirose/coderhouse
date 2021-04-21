import React from 'react'
import { ItemStyle } from './styles'
import ItemCount from '../ItemCount'
function Item({children, stock}){
    return(
        <ItemStyle>
            {children}
            <ItemCount stock={stock}/>
        </ItemStyle>
    )
}
export default Item
