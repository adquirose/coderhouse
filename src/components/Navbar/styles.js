import Styled from "styled-components";

export const NavContainer = Styled.div`
    width:100vw;
    height:100px;
    background:#785E60;
    display:grid;
    grid-template:[top] 60px [row1] 40px [bottom] / [izq] 1fr [col1] minmax(420px,1.4fr) [col2] 1fr [der];
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    align-items:center;
`;
export const Nav = Styled.ul`
    display:grid;
    grid-row: ${props => props.row};
    grid-column: ${props => props.column};
    grid-template:[top] 1fr [bottom] / [izq] 100px [col1] 100px [col2] 100px [der]; 
    justify-items:center;
    padding-left:0;
    margin:0;
`;
export const Item = Styled.li`
    list-style-type:none;
    text-align:center;
`;
export const Link = Styled.a`
    font-size:1rem;
    cursor:pointer;
    color:white;
`;
export const Input = Styled.input`
    grid-column:izq/col1;
    border:0;
    height:32px;
    &:focus{
        outline:none !important;
    } 
`;
export const InputGroup = Styled.div`
    grid-column:col1/col2;
    grid-row:top/row1;
    font-family: 'Arial';
    display: grid;
    grid-template:[top] 1fr [bottom] / [izq] 1fr [col1] 40px[];
    padding-left:5px;
    padding-right:5px;
    border-radius: 5px;
    background:white;
`;
export const Button = Styled.button`
    border:0;
    background:white;
    border-left:1px solid gray;
    grid-column:col1/der;
    grid-row:top/bottom;
    cursor:pointer;
    &:focus{
        outline:none !important;
    }
` 
