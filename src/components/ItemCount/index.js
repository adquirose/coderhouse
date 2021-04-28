import React from 'react'
import { ItemCountContainerStyle, Button, Span } from './styles'

function ItemCount(props){
    const isDisabledSub = props.counter === 0? true : false
    const isDisabledAdd = props.stockItem === 0? true: false
    return(
        <ItemCountContainerStyle row={props.row} column={props.column}>
            <Span>Stock: {props.stockItem}</Span>
           <div>
                <Button 
                    onClick={props.onAdd}
                    disabled={isDisabledAdd}
                    icon
                >
                    +
                </Button>
                <Span>{props.counter}</Span>
                <Button
                    onClick={props.onSub}
                    disabled={isDisabledSub}
                    icon
                >
                    -
                </Button>
           </div>
            <Button 
                onClick={() => alert('producto agregado al carro')} 
                disabled={isDisabledSub}   
            >
                Agregar al carro
            </Button>
        </ItemCountContainerStyle>
    )
}
export default ItemCount