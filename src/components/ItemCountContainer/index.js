import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";

function ItemCountContainer({stock, cart, onAdd, ...props}) {
	const [counter, setCounter] = useState(0);
	const [stockItem, setStockItem] = useState(stock);

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
	useEffect(() => {
		setStockItem(stock);
		console.log(cart)
	}, [stock,cart]);

	return (
		<ItemCount
			{...props}
			onSumar={onSumar}
			onRestar={onRestar}
			counter={counter}
			stockItem={stockItem}
			onAdd={onAdd}
			cart={cart}
		/>
	);
}
export default ItemCountContainer;
