import Styled from 'styled-components'

export const ItemListStyle = Styled.div`
    display:grid;
    /* grid-template:[top] 1fr [bottom] / [izq] 240px [der]; */
    grid-auto-flow:column;
    grid-auto-column:240px;
    width:100%;
    height:400px;
    overflow-x:auto;
    justify-items:center;
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
    overflow-x:hidden;
    &::-webkit-scrollbar {display: none;}
`
