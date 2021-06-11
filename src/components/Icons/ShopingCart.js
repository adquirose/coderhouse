import React from "react";
import Icon from "./Icon";

function ShoppingCart(props) {
	return (
		<Icon size={props.size} color={props.color}>
			<g stroke-linecap="square" strokeLinejoin="miter" strokeWidth="2" fill="#000000" stroke={props.color}>
				<polyline points="10 10 45 10 41 31 13 31 9 3 2 3" fill="none" stroke={props.color} strokeMiterlimit="10" strokeLinecap="butt"></polyline>
				<circle cx="15" cy="41" r="4" fill="none" strokeMiterlimit="10"></circle>
				<circle cx="40" cy="41" r="4" fill="none" strokeMiterlimit="10"></circle>
			</g>
		</Icon>
	);
}

export default ShoppingCart;

