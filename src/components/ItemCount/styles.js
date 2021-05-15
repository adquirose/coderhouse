import Styled, { css } from "styled-components";

export const ItemCountContainerStyle = Styled.div`
    display:grid;
    grid-template:[top] 30px [row1] 30px [bottom] / [izq] 30px [col1] 30px [col2] 30px [der];
    grid-column:${(props) => props.column};
    grid-row:${(props) => props.row}; 
    height:80px;
    width:240px;
    justify-content:center;
    margin-left:5px;
`;
export const Button = Styled.button`
    cursor:pointer;
    grid-row:row1/bottom;
    grid-column:${props => props.column};
    height:40px;
    ${(props) =>
		props.icon &&
			css`
				border-radius: 50%;
				border: none;
				background: gray;
				width: 30px !important;
				height: 30px !important;
				color: white;
	`};
`;
export const Span = Styled.span`
    font-size:1rem;
    color:#515151;
    grid-column:${(props) => props.column};
    grid-row:${(props) => props.row};
    display:flex;
    justify-content:center;
    align-items:center;
`;
