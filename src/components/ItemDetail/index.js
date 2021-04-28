import React from 'react'
import ItemCountContainer from '../ItemCountContainer'
import { ItemDetailStyle, ImageDetail, DescriptionContainer } from './styles.js'

const ItemDetail = ({name, description, stock, srcImage}) => {
    return(
        <ItemDetailStyle>
            <ImageDetail src={srcImage} alt={name}/>
            <DescriptionContainer>
                <h3>{name}</h3>
                <p>{description}</p>
            </DescriptionContainer>
            <ItemCountContainer row="row3/row4" column="col2/col3" stock={stock}/>
        </ItemDetailStyle>
    )
}
export default ItemDetail