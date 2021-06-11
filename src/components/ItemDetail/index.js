import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Container, Row, Col, Card } from "reactstrap";

const ItemDetail = ({
	title,
	description,
	stock,
	image,
	price,
	onAdd,
	id,
	cart,
	stockItem,
	isInCart,
}) => {
	const formatter = new Intl.NumberFormat("de-DE", {});
	const valor = formatter.format(price);
	return (
		<Container className="pt-5">
			<Row className="d-flex justify-content-center p-4">
				<Col sm="12" md="6">
					<img
						style={{
							maxWidth: "600px",
							maxHeight: "600px",
							width: "100%",
							borderRadius: "4px",
						}}
						src={image}
						alt={`img${title}`}
					/>
				</Col>
				<Col sm="12" md="6">
					<Card>
						<div className="p-4">
							<h2>{title}</h2>

							<hr />
							<h5>Descripción</h5>
							<p>{description}</p>
							<hr />
							<h4 className="text-center fs-4">${valor}</h4>
							<ItemCountContainer
								stock={stock}
								onAdd={onAdd}
								title={title}
								id={id}
								cart={cart}
								stockItem={stockItem}
								isInCart={isInCart}
							/>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ItemDetail;
