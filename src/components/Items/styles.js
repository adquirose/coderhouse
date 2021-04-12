import Styled from 'styled-components'
import { ColorGrayLight } from '../../constants'

export const ItemsContainer = Styled.div`
    grid-row:row1/bottom;
    grid-column:izq/der;
    display:grid;
    background:${ColorGrayLight};
    justify-content:center;
    align-items:center;
`