import React from "react";
import Item from "../Item";
import { ItemListStyle } from "./styles";
const ItemList = ({ data }) => {
	return (
		<ItemListStyle>
			{data.map((item) => {
				return <Item key={item.id} {...item} />;
			})}
		</ItemListStyle>
	);
};
export default ItemList;
