import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
export function ItemNotFound() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Row>
				<Col>
					<h3 className="text-center">Producto no encontrado!</h3>
					<Button className="w-100" tag={Link} to="/">
						Volver
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
export function CategoryNotFound() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Row>
				<Col>
					<h3 className="text-center">Categoria no encontrada!</h3>
					<Button className="w-100" tag={Link} to="/">
						Volver
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
export default function NotFound() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Row>
				<Col>
					<h3 className="text-center">Not Found!</h3>
					<Button className="w-100" tag={Link} to="/">
						Volver
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
