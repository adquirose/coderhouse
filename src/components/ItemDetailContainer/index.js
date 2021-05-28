import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { useCartContext } from '../CartContext'
import { getFirestore } from '../Firebase/firebase' 
import { Container } from 'reactstrap'

function ItemDetailContainer() {
	const { cart, addItem, isInCart } = useCartContext()
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
		<Container>
			{ isLoading && <div class="spinner-border" role="status"/> }
			{ !isLoading && dataItem && <ItemDetail {...dataItem} onAdd={onAdd} cart={cart} isInCart={isInCart}/> }
		</Container>
	);
}
export default ItemDetailContainer;
