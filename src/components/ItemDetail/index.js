import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Card, Nav, Photo, Description, H1, H2, H4, P, Image, Span, LinkStyled } from "./styles";
import { Heart, LeftArrow } from "../Icons";
import Loader from '../Loader'
const ItemDetail = ({ title, description, stock, image, price, onAdd, id, cart, stockItem, isInCart }) => {
	return (
		<Card>
			<Nav>
				<LinkStyled to="/">
					<LeftArrow color="#515151" size="25" />
					<Span>Volver al home</Span>
				</LinkStyled>
				<Heart color="#515151" size="25" />
			</Nav>
			<Photo>
				{image ? <Image src={image} alt={`img${title}`}/>  : <Loader/>}
				
			</Photo>
			<Description>
				<H2>{title}</H2>
				<H4>Popular House Plant</H4>
				<H1>${price}</H1>
				<P>{description}</P>
				<ItemCountContainer stock={stock} onAdd={onAdd} title={title} id={id} cart={cart} stockItem={stockItem} isInCart={isInCart}/>
			</Description>
		</Card>
	);
};
export default ItemDetail;
