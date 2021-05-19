import React, { useEffect } from "react";
import Item from "../Item";
import { ItemListStyle } from "./styles";
const ItemList = ({ data }) => {
	useEffect(() => {
		console.log(data)
	},[data])
	return (
		<ItemListStyle>
			{ data.map((item) => {
				return <Item key={item.id} {...item} />;
				})
			}
			
		</ItemListStyle>
	);
};
export default ItemList;
