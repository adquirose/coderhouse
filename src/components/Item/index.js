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

function Item({ id, name, stock, srcImage, valor }) {
	return (
		<ItemStyle>
			<ImageThumb src={srcImage} />
			<TextGroup>
				<Span>{name}</Span>
				<Span size="1rem">valor: ${valor}</Span>
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
