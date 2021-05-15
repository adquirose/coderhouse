import React from "react";
import Icon from "./Icon";

function ClearCart(props) {
	return (
		<Icon size={props.size} color={props.color}>
			<g fill="#000000" stroke={props.color} strokeLinecap="square" strokeWidth="2">
                <polyline fill="none" points="43.322,18.811 41,31 13,31 8,3 2,3 " stroke={props.color} strokeLinecap="butt"/>
                <circle cx="15" cy="41" fill="none" r="4"/>
                <circle cx="39" cy="41" fill="none" r="4"/>
                <line fill="none" stroke={props.color} strokeLinecap="butt" x1="26.202" x2="9.25" y1="10" y2="10"/>
                <circle cx="36" cy="12" fill="none" r="10"/>
                <line fill="none" x1="32" x2="40" y1="12" y2="12"/>
            </g>
		</Icon>
	);
}

export default ClearCart;


