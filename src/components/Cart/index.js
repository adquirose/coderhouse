import React, { Fragment } from "react";
import { useCartContext } from "../CartContext";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { Remove } from "../Icons";
import { Link } from "react-router-dom";
import "../../assets/css/cart.css";

function Cart() {
	const { cart, removeItem, clear, totalCompra } = useCartContext();
	const formatter = new Intl.NumberFormat("de-DE", {});
	const total = formatter.format(totalCompra());

	return (
		<Container className="pt-5">
			<Row className="pb-4">
				<h2 className="text-light text-center">Tus productos</h2>
				<hr/>
			</Row>
			<Row className="justify-content-center">
				{cart.length ? (
					<Fragment>
						<Col md="9">
							<Table className="bg-white">
								<thead>
									<tr>
										<th>Id</th>
										<th>Producto</th>
										<th>Valor</th>
										<th>Cantidad</th>
										<th>Sub total</th>
										<th>Borrar</th>
									</tr>
								</thead>
								<tbody>
									{cart.map((item, index) => {
										const valor = formatter.format(item.price);
										const subTotal = formatter.format(
											item.price * item.quantity
										);
										const nuevoId = item.id.substring(0, 6);
										return (
											<tr key={index}>
												<td>
													<span>{nuevoId}</span>
												</td>
												<td>{item.title}</td>
												<td>$ {valor}</td>
												<td>{item.quantity}</td>
												<td>$ {subTotal}</td>
												<td>
													<button onClick={() => removeItem(item.id)}>
														<Remove size="20" />
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</Col>

						<Col className="pt-4" md="9">
							<Row className="d-flex justify-content-start">
								<Col className="col-auto">
									<Button onClick={() => clear()}>Eliminar Carrito</Button>
								</Col>
								<Col className="col-auto">
									<Button tag={Link} to="/checkout">
										Continuar Pago
									</Button>
								</Col>
								<Col>
									<p style={{ fontSize: "1.5rem", textAlign: "end" }}>
										Total ${total}
									</p>
								</Col>
							</Row>
						</Col>
					</Fragment>
				) : (
					<Col className="text-center" md="9">
						<p className="fs-3">Tu Carrito esta vacio</p>
						<Button color="primary" tag={Link} to="/">
							Encuentra tu producto
						</Button>
					</Col>
				)}
			</Row>
		</Container>
	);
}
export default Cart;
