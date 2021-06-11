import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { useCartContext } from "../CartContext";
import { getFirestore } from "../Firebase/firebase";
import Loader from "../Loader";
import { ItemNotFound } from "../NotFound";

function ItemDetailContainer() {
	const { cart, addItem, isInCart } = useCartContext();
	const { id } = useParams();
	const [dataItem, setDataItem] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [notFound, setNotFound] = useState(undefined);
	const onAdd = (counter) => {
		addItem(dataItem, counter);
	};

	useEffect(() => {
		const db = getFirestore();
		const item = db.collection("items").doc(id);
		item
			.get()
			.then((doc) => {
				setIsLoading(true);
				if (!doc.exists) {
					console.log("item no encontrado");
					setNotFound(true);
				} else {
					setNotFound(false);
					console.log("item found!");
					setDataItem({ id: doc.id, ...doc.data() });
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [id]);
	const Detail = () =>
		!notFound && !isLoading ? (
			<ItemDetail {...dataItem} onAdd={onAdd} cart={cart} isInCart={isInCart} />
		) : (
			<ItemNotFound />
		);

	return (
		<Fragment>
			{notFound !== undefined ? <Detail /> : <Loader size="3rem" />}
		</Fragment>
	);
}
export default ItemDetailContainer;
