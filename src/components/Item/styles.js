import Styled from 'styled-components'
import { ColorGrayLight } from '../../constants'

export const ItemStyle = Styled.div`
    display:grid;
    grid-template:[top] 200px [row1] 1fr [bottom]/[izq] 1fr [der]; 
    background:${ColorGrayLight};
    justify-self:center;
    align-self:center;
    height:320px;
    width:220px;
    padding:5px;
    border-radius:5px;
    border:0;
    box-shadow:0 2px 8px 1px gray;
    &:hover{
        box-shadow:0 1px 3px 2px gray;
    }
`