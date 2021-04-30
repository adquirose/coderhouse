import React from "react";
import { ItemCountContainerStyle, Button, Span } from "./styles";

function ItemCount(props) {
	const isDisabledSub = props.counter === 0 ? true : false;
	const isDisabledAdd = props.stockItem === 0 ? true : false;
	return (
		<ItemCountContainerStyle row={props.row} column={props.column}>
			<Span row="top/row1" column="izq/der">
				Stock: {props.stockItem}
			</Span>

			<Button
				column="izq/col1"
				onClick={props.onAdd}
				disabled={isDisabledAdd}
				icon
			>
				+
			</Button>
			<Span row="row1/bottom" column="col1/col2">
				{props.counter}
			</Span>
			<Button
				column="col2/der"
				onClick={props.onSub}
				disabled={isDisabledSub}
				icon
			>
				-
			</Button>
		</ItemCountContainerStyle>
	);
}
export default ItemCount;
