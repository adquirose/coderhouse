import React from "react";
import Icon from "./Icon";

function Remove(props) {
	return (
		<Icon size={props.size} color={props.color} className={props.remove}>
			<g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" fill="#000000" stroke="#000000">
                <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="32" y1="16" x2="16" y2="32"></line> 
                <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="32" y1="32" x2="16" y2="16"></line>
            </g>
		</Icon>
	);
}

export default Remove
