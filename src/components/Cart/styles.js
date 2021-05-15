import Styled, {css} from 'styled-components'

export const CartContainerStyle = Styled.div`
    grid-column:izq/der;
    grid-row:row1/bottom;
    display:grid;
    grid-template: [top] 100px [row1] 1fr [row2] 150px [bottom] / [izq] 100px [col1] 1fr [col2] 100px [der];
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
    width:850px;
    justify-self:center;
    background:white;
    border-radius:5px;
    border-spacing: 0;

    tbody tr {
        height:75px;
        background-color: #efefef;
        :hover {
        background-color: lightgray;
        color:white;
        }
    }
    thead > tr {
        background-color: white;
        height:60px;
    }
    thead > tr > th {
        font-weight:300;
    }
    tbody > tr > td {
        text-align:center;
        padding: 5px 10px;
        border:0;
    }
`

export const Button = Styled.button`
    background:${props => props.bg ? '#3b57fc': 0};
    border:none;
    cursor:pointer;
    height:50px;
    
    ${props => props.buttonIcon &&  css`
        display:flex;
        align-items:center;
        justify-content:center;;
        width:170px;
        margin-left:10px;
        border-radius:5px;
        font-size:1rem;
        color:white;
    `}
`
export const Texto = Styled.p`
    grid-row:${props => props.row};
    grid-column:${props => props.column};
    font-size:${props => props.size};
    color:${props => props.color};
    text-align:center;
    font-weight:300;
    margin:0;
    align-self:center;
`
export const H2 = Styled.h2`
    text-align:center;
    color:white;
    grid-column:col1/col2;
    padding-top:2rem;
`
export const ButtonGroup = Styled.div`
    grid-row:top/bottom;
    grid-column:izq/col1;
    background:white;
    display:flex;
    flex-direction:row;

`
export const Section = Styled.div`
    display:grid;
    grid-template: [top] 100% [bottom] / [izq] 1fr [col1] 1fr [der];
    width:850px;
    height:150px;
    grid-row:row2/bottom;
    grid-column: col1/col2;
    justify-self:center;
    background:white;
    border-radius:2px;
    align-items:center;
`