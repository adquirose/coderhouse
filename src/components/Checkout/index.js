import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { useAuthContext } from "../Firebase/context";
import provincias from "../../config/provincias.json";
import { getFirestore } from "../Firebase/firebase";
import {
	Container,
	Row,
	Card,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
} from "reactstrap";
import CurrentUser from "../CurrentUser";

function Checkout() {
	const initialState = {
		firstname: "",
		surname: "",
		phone: "",
		zip: "",
		address: "",
		address_2: "",
		city: "",
		state: "",
	};
	const { cart, clear, totalCompra } = useCartContext();
	const { currentUser } = useAuthContext();

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const [order, setOrder] = useState(null);
	const [dataForm, setDataForm] = useState({ initialState });

	const [userData, setUserData] = useState({});

	const filterCart = cart.map((item) => {
		return {
			id: item.id,
			price: item.price,
			quantity: item.quantity,
			title: item.title,
		};
	});

	useEffect(() => {
		const db = getFirestore();
		const userCollection = db.collection("users");

		userCollection
			.where("uid", "==", currentUser.uid)
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log("[Checkout] No data found for this user");
				}
				setUserData(querySnapshot.docs.map((doc) => doc.data())[0]);
			})
			.catch((err) => {
				console.log("[Checkout] Error searching user data.", err);
			});
	}, [currentUser]);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();

		setLoading(true);
		setUserData(userData);
		let buyer = {
			name: dataForm.firstname,
			surname: dataForm.surname,
			phone: dataForm.phone,
			uid: currentUser.uid,
			address: dataForm.address,
			address_2: dataForm.address_2,
			city: dataForm.city,
			state: dataForm.state,
			zip: dataForm.zip,
		};
		const newOrder = {
			buyer: buyer,
			items: filterCart,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: totalCompra(),
			status: "Generada",
		};
		const db = getFirestore();
		const orders = db.collection("orders");
		const users = db.collection("users");
		orders
			.add(newOrder)
			.then((res) => {
				setOrder({
					id: res.id,
					details: newOrder,
				});
			})
			.then(() => {
				const batch = db.batch();
				const outOfStock = [];
				const itemsToUpdate = db.collection("items");
				itemsToUpdate
					.where(
						firebase.firestore.FieldPath.documentId(),
						"in",
						cart.map((item) => item.id)
					)
					.get()
					.then((query) => {
						query.docs.forEach((docSnapshot, idx) => {
							if (docSnapshot.data().stock >= cart[idx].quantity) {
								batch.update(docSnapshot.ref, {
									stock: docSnapshot.data().stock - cart[idx].quantity,
								});
							} else {
								outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
							}
						});
					});
				if (outOfStock.length === 0) {
					batch.commit();
				}
			})
			.catch((err) => {
				console.log("ha ocurrido un error al crear la orden: ", err);
				setError(err);
			})
			.finally(() => {
				setLoading(false);
				clear();
			});

		users
			.where("uid", "==", buyer.uid)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => users.doc(doc.id).update(buyer));
			})
			.catch((err) => {
				console.log("[Checkout] Error updating user.", err);
			});
	};

	const onChangeInput = (evt) => {
		setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
		console.log(dataForm);
	};

	return (
		<div>
			<h1>Checkout</h1>
			{currentUser && <CurrentUser />}
			{!!order ? (
				<Redirect to={`/order/${order.id}`} />
			) : (
				<Container>
					<Row>
						<Card>
							<FormCheckOut onSubmit={handleSubmit} onChangeInput={onChangeInput} dataForm={dataForm} />
						</Card>
					</Row>
				</Container>
			)}
		</div>
	);
}
export default Checkout;

const FormCheckOut = ({onChangeInput, dataForm, onSubmit}) => {
	return (
		<Form onSubmit={onSubmit}>
			<FormGroup row>
				<Col>
					<Label>Nombre</Label>
					<Input
						name="firstname"
						required
						type="text"
						placeholder="Nombre"
						onChange={onChangeInput}
						value={dataForm.firstname}
					/>
				</Col>
				<Col>
					<Label>Apellido</Label>
					<Input
						name="surname"
						required
						type="text"
						placeholder="Apellido"
						onChange={onChangeInput}
						value={dataForm.surname}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col>
					<Label>Teléfono</Label>
					<Input
						name="phone"
						required
						type="tel"
						placeholder="Teléfono"
						onChange={onChangeInput}
						value={dataForm.phone}
					/>
				</Col>
				<Col>
					<Label>Código Postal</Label>
					<Input
						name="zip"
						required
						type="tel"
						placeholder="1234"
						onChange={onChangeInput}
						value={dataForm.zip}
					/>
				</Col>
			</FormGroup>

			<FormGroup row>
				<Label>Dirección</Label>
				<Input
					name="address"
					required
					placeholder="Av. Siempreviva 742"
					onChange={onChangeInput}
					value={dataForm.address}
				/>
			</FormGroup>

			<FormGroup row>
				<Label>Dirección 2</Label>
				<Input
					name="address_2"
					placeholder="Piso, departamento, lote"
					onChange={onChangeInput}
					value={dataForm.address_2}
				/>
			</FormGroup>

			<FormGroup>
				<Col>
					<Label>Ciudad/Localidad</Label>
					<Input
						name="city"
						required
						placeholder="Ciudad"
						onChange={onChangeInput}
						value={dataForm.city}
					/>
				</Col>

				<Col>
					<Label>Provincia</Label>
					<Input
						name="state"
						required
						type="select"
						id="exampleSelect"
						onChange={onChangeInput}
						value={dataForm.state}
					>
						<option disabled value="">
							Seleccionar...
						</option>
						{provincias.data.map((provincia, i) => (
							<option key={i}>{provincia.name}</option>
						))}
					</Input>
				</Col>
			</FormGroup>

			<Button variant="warning" type="submit" block>
				FINALIZAR MI COMPRA
			</Button>
		</Form>
	);
};
