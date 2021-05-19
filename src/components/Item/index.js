import React from "react";
import {
	ItemStyle,
	ImageThumb,
	Span,
	ButtonGroup,
	TextGroup,
	Button,
	LinkStyled,
} from "./styles";
// import ItemCountContainer from "../ItemCountContainer";

function Item({ id, title, stock, image, price }) {
	return (
		<ItemStyle>
			<ImageThumb src={image} />
			<TextGroup>
				<Span>{title}</Span>
				<Span size="1rem">valor: ${price}</Span>
			</TextGroup>
			{/* <ItemCountContainer column="izq/der" row="row2/row3" stock={stock} /> */}
			<ButtonGroup>
				<Button>
					<LinkStyled to={`/item/${id}`}>Ver Detalle</LinkStyled>
				</Button>
			</ButtonGroup>
		</ItemStyle>
	);
}
export default Item;
