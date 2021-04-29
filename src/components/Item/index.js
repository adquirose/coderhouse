import React from 'react'
import { Link } from 'react-router-dom'
import { ItemStyle, ImageThumb, Span, LinkStyle } from './styles'
import ItemCountContainer from '../ItemCountContainer'

function Item({id, name, stock, srcImage, valor}){
    return(
        <ItemStyle>
            <Link to={`/item/${id}`} style={LinkStyle}>
               <ImageThumb src={srcImage}/>
               <Span>{name}</Span>
               <Span>${valor}</Span>
            </Link> 
            <ItemCountContainer column="izq/der" row="row1/bottom" stock={stock}/>
        </ItemStyle>
    )
}
export default Item
