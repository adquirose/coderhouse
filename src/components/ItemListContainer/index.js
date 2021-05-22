import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import Loader from "../Loader";
// import { ItemListContainerStyle } from "./styles.js";
import { Container } from 'reactstrap'
import { getFirestore } from '../Firebase'
import { useParams } from "react-router-dom";

function ItemListContainer() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true)
		const db = getFirestore()
		const itemCollection = db.collection('items')
		const consulta = id ? itemCollection.where('categoryId','==',id) : itemCollection
		consulta.get().then((querySnapshot) => {
			if(querySnapshot.size === 0) {
				console.log('No se econtraron resultados')
			}
			const documentos = querySnapshot.docs.map(doc => {
				return{ ...doc.data(), id:doc.id }
			})
			setData(documentos)
		}).catch( error => {
			console.log('Error buscando items', error)
		}).finally(() => {
			setIsLoading(false)
		})
	}, [id]);

	return (
		<Container>
			{ isLoading && <Loader /> }
			{ !isLoading && data.length ? <ItemList data={data} /> : null }
		</Container>
	);
}
export default ItemListContainer;
