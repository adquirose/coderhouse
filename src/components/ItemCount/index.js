import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
function ItemCount({
	counter,
	stockItem,
	onSumar,
	onRestar,
	onAdd,
	cart,
	clearCount,
}) {
	const isDisabled = counter === 0 ? true : false;
	const isDisabledAdd = stockItem === 0 ? true : false;

	return (
		<Container>
			<Row className="justify-content-center">
				<Col sm="6" className="text-center">
					<span>Stock: {stockItem}</span>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col className="col-auto">
					<Button
						className="btn rounded-circle"
						onClick={onRestar}
						disabled={isDisabled}
					>
						-
					</Button>
				</Col>
				<Col className="col-auto">
					<span>{counter}</span>
				</Col>
				<Col className="col-auto">
					<Button
						className="btn rounded-circle"
						onClick={onSumar}
						disabled={isDisabledAdd}
					>
						+
					</Button>
				</Col>
			</Row>
			<Row className="pt-3">
				<Col className="text-center" sm="6">
					<Button
						onClick={() => {
							onAdd(counter);
							clearCount();
						}}
						disabled={isDisabled}
					>
						Agregar al carro
					</Button>
				</Col>
				<Col className="center" sm="6">
					{cart.length > 0 && (
						<Button tag={Link} to="/cart">
							Terminar Compra
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
}
export default ItemCount;
