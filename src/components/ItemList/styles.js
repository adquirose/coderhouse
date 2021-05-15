import Styled from "styled-components";

export const ItemListStyle = Styled.div`
    display:grid;
    grid-template:[top] 385px [bottom] / [izq] 240px [col1] 240px [col2] 240px [col3] 240px [der];
    grid-auto-flow:row;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:start;
    grid-gap:8px;
`;
