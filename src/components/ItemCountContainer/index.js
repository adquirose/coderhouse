import React, { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";

function ItemCountContainer(props) {
	const [counter, setCounter] = useState(0);
	const [stockItem, setStockItem] = useState(props.stock);

	const onCantidad = () => {
		if (counter < props.stock) {
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
	useEffect(() => {
		setStockItem(props.stock);
	}, [props.stock]);

	return (
		<ItemCount
			{...props}
			onCantidad={onCantidad}
			onAdd={props.onAdd}
			onSub={onSub}
			counter={counter}
			stockItem={stockItem}
		/>
	);
}
export default ItemCountContainer;
