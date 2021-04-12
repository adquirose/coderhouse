import React from 'react'
import { ItemsContainer } from './styles'

function Items(props){
    return(
        <ItemsContainer>
            {props.children}
        </ItemsContainer>
    )
}
export default Items