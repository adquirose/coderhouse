import React from "react";
import Item from "../Item";
import { Container, Row } from "reactstrap";
const ItemList = ({ data }) => {
	return (
		<Container className="pt-5">
			<Row className="d-flex justify-content-center p-4">
				{data.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</Row>
		</Container>
	);
};
export default ItemList;
