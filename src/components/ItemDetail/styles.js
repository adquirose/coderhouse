import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = Styled.div`
    width: 650px;
    position: absolute;
    background:white;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.3s;
    display: grid;
    grid-template:[top] 1fr [row1] 360px [bottom] / [izq] 1fr [col1] 1fr [der];
    &:hover{
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;
export const Nav = Styled.div`
    display:flex;
    justify-content:space-between;
    width: auto;
    color: #727272;
    text-transform: uppercase;
    padding: 20px;
    border-bottom: 2px solid #efefef;
    font-size: 12px;
    grid-row: top/row1;
    grid-column: izq/der;
`;
export const Photo = Styled.div`
  padding: 30px;
  width: 45%;
  justify-self: center;;
  grid-row: row1/bottom;
  grid-column: izq/col1;
`;
export const Image = Styled.img`
     max-height: 240px;
`;
export const H1 = Styled.h1`
  color: #515151;
  font-weight: 300;
  padding-top: 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 300;
`;
export const H2 = Styled.h2`
  color: #515151;
  margin: 0;
  text-transform: uppercase;
  font-weight: 500;
`;
export const H4 = Styled.h4`
  margin: 0;
  color: #727272;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
`;
export const P = Styled.p`
     font-size: 12px;
  line-height: 20px;
  color: #727272;
  padding: 20px 0;
  margin: 0;
`;
export const Description = Styled.div`
  padding: 30px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;
  grid-row: row1/bottom;
  grid-column: col1/der;
`;
export const Button = Styled.div`
  font-size:0.8rem;
  border: 0;
  background: #3b57fc;
  padding: 8px 5px;
  border-radius:3px;
  height:30px;
  color: white;
  text-transform: uppercase;
  text-align:center;
  width: 100px;
  font-family: inherit;
  margin-right: 5px;
  transition: all 0.3s ease;
  font-weight: 400;
`;
export const ButtonGroup = Styled.div`
    width: 260px;
    display:flex;
    align-items: center;
    background:gray;
`;
export const Span = Styled.span`
    font-size:0.8rem;
`;
export const LinkStyled = Styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#515151
`;
