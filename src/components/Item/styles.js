import Styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemStyle = Styled.div`
    display:grid;
    grid-template:[top] 180px [row1] 60px [row2] 60px [row3] 40px [bottom]/[izq] 1fr [der]; 
    background:white;
    justify-self:center;
    height:345px;
    width:230px;
    padding:5px;
    margin-top:40px;
    border-radius:0;
    border:0;
    box-shadow:0 2px 8px 1px gray;
    &:hover{
        box-shadow:0 1px 3px 2px gray;
    }
`;
export const ImageThumb = Styled.img`
    display:grid;
    width:100%;
    height:180px;
    margin: auto;
    justify-items:center;
    object-fit: cover;
`;
export const Span = Styled.span`
    display:grid;   
    font-size:${(props) => (props.size ? props.size : "1.2rem")};
    color:#494a4b;
    justify-items:center;
    margin-top:5px;
    grid-row:${(props) => (props.row ? props.row : null)};
`;
export const TextGroup = Styled.div`
    display:grid;
    height:100%;
    width:100%;
    grid-row:${(props) => (props.row ? props.row : null)};
`;
export const ButtonGroup = Styled.div`
    display:flex;
    height:100;
    width:100%;
    justify-content:space-around;
    align-items:center;
`;
export const Button = Styled.button`
    padding:7px;
    background:#1B998B;
    color:white;
    font-weight:700;
    border:0;
    height:30px;
`;
export const LinkStyled = Styled(Link)`
    color:white;
    text-decoration:none;
`;
