import React from 'react'
import { ItemStyle } from './styles'

function Item({children}){
    return(
        <ItemStyle>
            {children}
        </ItemStyle>
    )
}
export default Item
