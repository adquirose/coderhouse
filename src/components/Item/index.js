import React from "react";
import { Link } from "react-router-dom";
import {
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from "reactstrap";

function Item({ id, title, image, price }) {
	return (
		<Col className="pb-4" sm="12" md="4">
			<Card>
				<CardImg src={image} alt={`alt${image}`} />
				<CardBody>
					<CardTitle tag="h5">{title}</CardTitle>
					<CardText>Valor: ${price}</CardText>
					<Button tag={Link} to={`/item/${id}`}>
						Ver Detalle
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}
export default Item;
