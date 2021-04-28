import Styled, { css } from 'styled-components'

export const ItemCountContainerStyle = Styled.div`
    display:grid;
    grid-column:${props => props.column};
    grid-row:${ props => props.row}; 
    justify-items:center;
    align-items:center;
    max-height:140px;
    min-height:100px;
    align-self:center;
`;
export const Button = Styled.button`
    color:gray;
    cursor:pointer;
    ${ props => props.icon && css`
        border-radius:50%;
        border:none;
        background:gray;
        width:30px;
        height:30px;
        color:white;
    `};
`;
export const Span = Styled.span`
    font-size:1rem;
    color:gray;
    margin:10px;
`