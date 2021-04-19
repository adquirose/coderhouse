import Styled from 'styled-components'

export const ItemListStyle = Styled.div`
    width:100%;
    height:400px;
    background: gray;
    overflow-x:auto;
    display:grid;
    grid-template:[top] 1fr [bottom] / [izq] 225px [col1] 225px [col2] 225px [der];
`
export const ItemListContainerStyle = Styled.div`
    width:100vw;
`
