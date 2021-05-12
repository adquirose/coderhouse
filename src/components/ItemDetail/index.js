import React from "react";
import ItemCountContainer from "../ItemCountContainer";
import { Link } from 'react-router-dom'
import { Button, Card, Nav, Photo, Description, H1, H2, H4, P, ButtonGroup, Image, Span, LinkStyled } from "./styles";
import { Heart, LeftArrow } from "../Icons";

const ItemDetail = ({ name, description, stock, srcImage, valor, onAdd, id, cart}) => {
	
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
					<ItemCountContainer stock={stock} onAdd={onAdd} name={name} id={id} cart={cart}/>
					{ cart.length ? 
						<Link to='/cart'>
							<Button> 
								Terminar Compra
							</Button> 
						</Link> : null
					}
				</ButtonGroup>
			</Description>
		</Card>
	);
};
export default ItemDetail;
