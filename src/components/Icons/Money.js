import React from "react";
import Icon from "./Icon";

function Money(props) {
	return (
		<Icon size={props.size} color={props.color}>
			<g fill="#000000" stroke={props.color} strokeLinecap="square" strokeWidth="2">
				<path
					d="M34,14H14 c0,3.3-2.7,6-6,6v8c3.3,0,6,2.7,6,6h20c0-3.3,2.7-6,6-6v-8C36.7,20,34,17.3,34,14z"
					fill="none"
				/>
				<rect height="32" width="44" fill="none" stroke={props.color} x="2" y="8" />
				<circle cx="24" cy="24" fill="none" r="4" stroke={props.color} />
			</g>
		</Icon>
	);
}

export default Money;
