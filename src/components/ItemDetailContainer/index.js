import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { ItemNotFound } from '../NotFound'
import { useCartContext } from '../CartContext'
import { getFirestore } from '../Firebase/firebase' 
import { Container } from 'reactstrap'

function ItemDetailContainer() {

	const { cart, addItem, isInCart } = useCartContext()
	const { id } = useParams();
	const [dataItem, setDataItem] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const [notFound, setNotFound] = useState(false)
	const onAdd = counter => {
		addItem(dataItem, counter)
	}
	
	useEffect(() => {
		const db = getFirestore()
		const item = db.collection('items').doc(id)
		item.get()
			.then((doc) => {
				setIsLoading(true)
				if(!doc.exists){
					console.log('item no encontrado')
					setNotFound(true)
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
			{ isLoading && <div className="spinner-border" role="status"/> }
			{ !isLoading && dataItem && !notFound &&<ItemDetail {...dataItem} onAdd={onAdd} cart={cart} isInCart={isInCart}/> }
			{ notFound && !isLoading && <ItemNotFound/>}
		</Container>
	);
}
export default ItemDetailContainer;
