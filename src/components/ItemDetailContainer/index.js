import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { items } from "../../constants/items";
import Loader from "../Loader";
import { ItemListContainerStyle } from "../ItemListContainer/styles";

function ItemDetailContainer() {
	const { id } = useParams();
	const [dataItem, setDataItem] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const getItem = () => {
		return new Promise((resolve, reject) => {
			setIsLoading(true);
			setTimeout(() => {
				resolve(items);
			}, 2000);
		});
	};
	useEffect(() => {
		getItem()
			.then((res) => {
				const itemFilter = res.filter((item) => item.id === id);
				itemFilter ? setDataItem(itemFilter[0]) : setDataItem({});
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, [id]);

	return (
		<ItemListContainerStyle>
			{ isLoading && <Loader /> }
			{ !isLoading && !!Object.keys(dataItem).length && <ItemDetail {...dataItem} /> }
		</ItemListContainerStyle>
	);
}
export default ItemDetailContainer;
