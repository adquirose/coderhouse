import Styled from 'styled-components'

export const ItemDetailStyle = Styled.div`
    display:grid;
    grid-template:[top] 20px [row1] 1fr [row2] 1fr [row3] 1fr [row4] 20px [bottom] / [izq] 60px [col1] 1fr [col2] 1fr [col3] 60px [der];
    width:100vw;
    height:100%;
    
`
export const ImageDetail = Styled.img`
    grid-row:row1/row3;
    grid-column:col1/col2;
    width:100%;
    height:100%;
`
export const DescriptionContainer = Styled.div`
    grid-row:row3/row4;
    grid-column:col1/col2;

`
