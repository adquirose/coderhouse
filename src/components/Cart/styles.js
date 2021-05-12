import Styled from 'styled-components'

export const CartContainerStyle = Styled.div`
    grid-column:izq/der;
    grid-row:row1/bottom;
    display:grid;
    grid-template: [top] 100px [row1] 1fr [row2] 100px [bottom] / [izq] 100px [col1] 1fr [col2] 100px [der];
`
export const ItemCartStyle = Styled.div`
    display:grid;
    grid-column:col1/col2;
    grid-row:${props => props.row}}
    justify-content:center;
    grid-template:[top] 40px [bottom] / [izq] 40px [col1] 120px [col2] 120px [col3] 120px [col4] 120px [der];
`
export const Table = Styled.table`
    grid-row:row1/row2;
    grid-column:col1/col2;
    background:white;
`
export const Td = Styled.td`
    text-align:center;
    height:40px;
`
export const Button = Styled.button`
    border:none;
    background:none;
    cursor:pointer;
`
export const Texto = Styled.p`
    grid-row:row1/row2;
    grid-column:col1/col2;
    font-size:2rem;
    color:white;
`