import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import {
	Card,
	Nav,
	Photo,
	Description,
	H1,
	H2,
	H4,
	P,
	ButtonGroup,
	Button,
	Image,
	Span,
	LinkStyled,
} from "./styles";
import { Heart, LeftArrow } from "../Icons";
const ItemDetail = ({ name, description, stock, srcImage, valor }) => {
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
				<Image src={srcImage} alt={`img${name}`} />
			</Photo>
			<Description>
				<H2>{name}</H2>
				<H4>Popular House Plant</H4>
				<H1>${valor}</H1>
				<P>{description}</P>
				<ButtonGroup>
					<Button>Agregar al Carro</Button>
					<ItemCountContainer stock={stock} />
				</ButtonGroup>
			</Description>
		</Card>
	);
};
export default ItemDetail;
