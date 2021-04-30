import React, { useState } from 'react'

export const CartContext = React.createContext()

export default function CartContextProvider({ defaultValue = [], children }){

    const [counter, setCounter] = useState(0);
	const [stockItem, setStockItem] = useState(0);

	const onAdd = () => {
		if (counter < 5) {
			setCounter(counter + 1);
			setStockItem(stockItem - 1);
		}
	};
	const onSub = () => {
		if (counter >= 1) {
			setCounter(counter - 1);
			setStockItem(stockItem + 1);
		}
	};
	
    return(
        <CartContext.Provider value={[counter, onAdd, onSub]}>
            {children}
        </CartContext.Provider>
    )
}