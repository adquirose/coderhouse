import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";

function ItemCountContainer({stock, cart, onAdd, id, isInCart, ...props}) {
	const [counter, setCounter] = useState(0);
	const [stockItem, setStockItem] = useState(0);

	const onSumar = () => {
		if (counter < stock) {
			setCounter(counter + 1);
			setStockItem(stockItem - 1);
		}
	};
	const onRestar = () => {
		if (counter >= 1) {
			setCounter(counter - 1);
			setStockItem(stockItem + 1);
		}
	};
	const clearCount = () => {
		setCounter(0)
	}
	
	useEffect(() => {
		isInCart(id) ?
			cart.forEach(item => { 
				if(item.id === id){
					setStockItem(item.stock)
				}
			})
			:
			setStockItem(stock)
			
	},[id,stock, cart, isInCart]);
	
	return (
		<ItemCount
			{...props}
			onSumar={onSumar}
			onRestar={onRestar}
			counter={counter}
			stockItem={stockItem}
			onAdd={onAdd}
			cart={cart}
			clearCount={clearCount}
		/>
	);
}
export default ItemCountContainer;
