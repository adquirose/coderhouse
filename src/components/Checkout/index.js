import React, { Fragment, useEffect, useState } from "react";
import { useCartContext } from "../CartContext";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
import firebase from "firebase/app";
import { getFirestore } from "../Firebase/firebase";
import { Link } from "react-router-dom";

function Checkout() {
	const [userInfo, setUserInfo] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
		address: "",
	});
	const [orderId, setOrderId] = useState("");
	const { cart, totalCompra, clear } = useCartContext();
	const onChangeInput = (e) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const db = getFirestore();
		const orders = db.collection("orders");
		const newOrder = {
			buyer: userInfo,
			items: cart,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: totalCompra(),
		};
        const batch = db.batch();
		const outOfStock = [];
	    const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id))
        
		orders
			.add(newOrder)
			.then(({ id }) => {
				setOrderId(id);
				clear();
			}).then(() => {

            })
			.catch((error) => {
				console.log(`no se creo la orden ${error}`);
			})
			.finally(() => {
				setUserInfo({});
				
			});
        
        if(cart.length > 0){
            itemsToUpdate
            .get()
            .then( query => { 
                query.docs.forEach((docSnapshot, idx) => {
                    if( docSnapshot.data().stock >= cart[idx].quantity){
                        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].quantity })
                    }else{
                        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
                    }
                })
                if(outOfStock.length === 0){
                    batch.commit()
                }
            })
        } 
	};
    const isDisabled = userInfo.name === '' || userInfo.surname === '' || userInfo.phone === '' || userInfo.address === ''
	const renderTable = () => {
		return (
			<Fragment>
				{cart.length > 0 ? (
					<Table>
						<thead>
							<tr>
								<th>#</th>
								<th>Producto</th>
								<th>Cantidad</th>
								<th>Precio</th>
							</tr>
						</thead>
						<tbody>
							{cart.length &&
								cart.map((item, index) => (
									<tr key={index}>
										<th scope="row">{index}</th>
										<td>{item.title}</td>
										<td>{item.quantity}</td>
										<td>{item.price}</td>
									</tr>
								))}
						</tbody>
					</Table>
				) : (
					<p>No hay items en el carro</p>
				)}
			</Fragment>
		);
	};
	return (
		<Fragment>
			{orderId ? (
				<Container className="d-flex justify-content-center align-items-center">
					<Row>
						<Col>
							<h3 className="text-center">Compra Exitosa</h3>
							<p>tu numero de orden: {orderId}</p>
							<Button tag={Link} to="/">
								Volver
							</Button>
						</Col>
					</Row>
				</Container>
			) : (
				<Container className="align-items-center">
					<Row>
						<Col>
							<h4>Ckeckout</h4>
							<Form onSubmit={handleSubmit}>
								<FormGroup row>
									<Col sm="12">
										<Label>Nombre</Label>
										<Input
											name="name"
											type="text"
											value={userInfo.name}
											onChange={onChangeInput}
											placeholder="Nombre"
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col sm="12">
										<Label>Apellido</Label>
										<Input
											name="surname"
											type="text"
											value={userInfo.surname}
											onChange={onChangeInput}
											placeholder="Apellido"
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col sm="12">
										<Label>Email</Label>
										<Input
											name="email"
											type="email"
											value={userInfo.email}
											onChange={onChangeInput}
											placeholder="Correo electronico"
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col sm="12">
										<Label>Dirección</Label>
										<Input
											name="address"
											type="text"
											value={userInfo.address}
											onChange={onChangeInput}
											placeholder="Dirección "
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col sm="12">
										<Label>Telefono</Label>
										<Input
											name="phone"
											type="number"
											value={userInfo.phone}
											onChange={onChangeInput}
											placeholder="Numero de telefono"
										/>
									</Col>
								</FormGroup>
								<Button disabled={isDisabled} type="submit">Confirmar Compra</Button>
							</Form>
						</Col>
						<Col className="pt-5">{renderTable()}</Col>
					</Row>
				</Container>
			)}
		</Fragment>
	);
}
export default Checkout;
