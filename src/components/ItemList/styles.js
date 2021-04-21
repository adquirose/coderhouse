import Styled from 'styled-components'

export const ItemListStyle = Styled.div`
    display:grid;
    grid-template:[top] 1fr [bottom] / [izq] 240px [col1] 240px [col2] 240px [der];
    grid-auto-flow:row;
    width:100%;
    height:400px;
    justify-content:center;
    grid-gap:8px;
    /* background:blue; */

`
export const ItemListContainerStyle = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:450px;
    grid-column:col1/col2;
`
