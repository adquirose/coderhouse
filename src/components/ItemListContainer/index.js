import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import Loader from "../Loader";
import { ItemListContainerStyle } from "./styles.js";
// import { items } from "../../constants/items";
import { getFirestore } from '../Firebase'
import { useParams } from "react-router-dom";

function ItemListContainer() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// const promesa = () => {
	// 	return new Promise((resolve, reject) => {
	// 		setIsLoading(true);
	// 		setTimeout(() => {
	// 			// reject('error en promesa')
	// 			resolve(items);
	// 		}, 2000);
	// 	});
	// };
	useEffect(() => {
		setIsLoading(true)
		const db = getFirestore()
		const itemCollection = db.collection('items')

		itemCollection.get().then((querySnapshot) => {
			if(querySnapshot.size === 0) {
				console.log('No results!')
			}
			const documentos = querySnapshot.docs.map(doc => {
				return{
					...doc.data(), id:doc.id
				}
			})
			!id	? 
				setData(documentos) 
				: 
				setData(documentos.filter((item) => item.categoryId === id));
		}).catch( error => {
			console.log('Error buscando items', error)
		}).finally(() => {
			setIsLoading(false)
		})
		// promesa()
		// 	.then((res) => {
		// 		!id
		// 			? setData(res)
		// 			: setData(res.filter((item) => item.category === id));
		// 		setIsLoading(false);
		// 	})
		// 	.catch((error) => {
		// 		setIsLoading(false);
		// 		console.log(`ha ocurrido un error ${error}`);
		// 	});

	}, [id]);

	return (
		<ItemListContainerStyle>
			{isLoading && <Loader />}
			{!isLoading && data.length && <ItemList data={data} />}
		</ItemListContainerStyle>
	);
}
export default ItemListContainer;
