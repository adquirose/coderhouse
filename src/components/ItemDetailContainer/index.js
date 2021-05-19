import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loader from "../Loader";
import { ItemListContainerStyle } from "../ItemListContainer/styles";
import { CartContext } from '../CartContext'
import { getFirestore } from '../Firebase'

function ItemDetailContainer() {
	const { cart, addItem, isInCart } = useContext(CartContext)
	const { id } = useParams();
	const [dataItem, setDataItem] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const onAdd = counter => {
		addItem( dataItem, counter)
	}
	useEffect(() => {
		const db = getFirestore()
		const item = db.collection('items').doc(id)
		item.get()
			.then((doc) => {
				if(!doc.exists){
					console.log('items does not exist! :(')
					return
				}
				console.log('item found!')
				setDataItem({id: doc.id, ...doc.data()})
			})
			.catch((error) => {
				console.log(error)
			}).finally(() => {
				setIsLoading(false)
			})
	}, [id]);

	return (
		<ItemListContainerStyle>
			{ isLoading && <Loader /> }
			{ !isLoading && dataItem && <ItemDetail {...dataItem} onAdd={onAdd} cart={cart} isInCart={isInCart}/> }
		</ItemListContainerStyle>
	);
}
export default ItemDetailContainer;
