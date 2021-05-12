import React from "react";
import { ItemCountContainerStyle, Button, Span } from "./styles";

function ItemCount({ counter, stockItem, column, row, onCantidad, onSub, onAdd }) {
	const isDisabledSub = counter === 0 ? true : false;
	const isDisabledAdd = stockItem === 0 ? true : false;
	return (
		<ItemCountContainerStyle row={row} column={column}>
			<Span row="top/row1" column="izq/der">
				Stock: {stockItem}
			</Span>

			<Button
				column="izq/col1"
				onClick={onCantidad}
				disabled={isDisabledAdd}
				icon
			>
				+
			</Button>
			<Span row="row1/bottom" column="col1/col2">
				{counter}
			</Span>
			<Button
				column="col2/der"
				onClick={onSub}
				disabled={isDisabledSub}
				icon
			>
				-
			</Button>
			<Button
			 onClick={() => onAdd(counter)}
			>
				Agregar al carro
			</Button>
			
			
		</ItemCountContainerStyle>
	);
}
export default ItemCount;
