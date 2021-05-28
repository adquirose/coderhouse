import React from "react";
import Item from "../Item";
import { Container, Row } from 'reactstrap'
const ItemList = ({ data }) => {
	return (
		<Container>
			<Row className="pt-4 d-flex justify-content-center align-items-center">
				{ data.map((item) => {
					return <Item key={item.id} {...item} />;
					})
				}
				
			</Row>
		</Container>
	);
};
export default ItemList;
