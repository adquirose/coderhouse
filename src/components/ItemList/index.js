import React from "react";
import Item from "../Item";
import { Row } from 'reactstrap'
const ItemList = ({ data }) => {
	return (
		<Row className="pt-4">
			{ data.map((item) => {
				return <Item key={item.id} {...item} />;
				})
			}
			
		</Row>
	);
};
export default ItemList;
