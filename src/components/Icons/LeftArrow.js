import React from "react";
import Icon from "./Icon";

function LeftArrow(props) {
	return (
		<Icon size={props.size} color={props.color}>
			<g
				fill="#000000"
				stroke={props.color}
				strokeLinecap="square"
				strokeWidth="2"
			>
				<polyline fill="none" points="34,4 14,24 34,44 " stroke={props.color} />
			</g>
		</Icon>
	);
}

export default LeftArrow;
