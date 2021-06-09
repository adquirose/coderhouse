import React, { useState, useEffect, Fragment } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from '../Firebase/firebase'
import { CategoryNotFound } from '../NotFound'

import Loader from '../Loader'
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
		<Fragment>
			{ isLoading && <Loader /> }
			{ !isLoading && data.length ? <ItemList data={data} /> : null } 
			{ data.length === 0 &&  !isLoading && <CategoryNotFound />}
		</Fragment>
	);
}
export default ItemListContainer;
