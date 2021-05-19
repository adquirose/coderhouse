import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Card, Nav, Photo, Description, H1, H2, H4, P, Image, Span, LinkStyled } from "./styles";
import { Heart, LeftArrow } from "../Icons";

const ItemDetail = ({ title, description, stock, image, price, onAdd, id, cart }) => {
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
				<Image src={image} alt={`img${title}`} />
			</Photo>
			<Description>
				<H2>{title}</H2>
				<H4>Popular House Plant</H4>
				<H1>${price}</H1>
				<P>{description}</P>
				<ItemCountContainer stock={stock} onAdd={onAdd} title={title} id={id} cart={cart}/>
			</Description>
		</Card>
	);
};
export default ItemDetail;
