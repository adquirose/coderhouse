import React, {Fragment, useState } from 'react'

function ItemCount({stock}){
    const [counter, setCounter] = useState(0)
    const [stockItem, setStockItem] = useState(stock)
   
    const onAdd = () => {
        if(counter < stock){
            setCounter(counter + 1)
            setStockItem(stockItem - 1)
        }
    }
    const onSub = () => {
        if(counter >= 1){
            setCounter(counter - 1)
            setStockItem(stockItem + 1)
        }
    }
    const isDisabledSub = counter === 0? true : false
    const isDisabledAdd = stockItem === 0? true: false
    return(
        <Fragment>
            <p>Cantidad: {counter}</p>
            <p>Quedan: {stockItem}</p>
            <button
                onClick={onAdd}
                disabled={isDisabledAdd}
            >
                +
            </button>
            <button
                onClick={onSub}
                disabled={isDisabledSub}
            >
                -
            </button>
            <button 
                onClick={() => alert('producto agregado al carro')} 
                disabled={isDisabledSub}   
            >
                Agregar al carro
            </button>
        </Fragment>
    )
}
export default ItemCount