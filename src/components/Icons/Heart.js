import React from "react";
import Icon from "./Icon";

function Heart(props) {
	return (
		<Icon size={props.size} color={props.color} className={props.heart}>
			<g
				fill="#000000"
				stroke={props.color}
				strokeLinecap="square"
				strokeWidth="2"
			>
				<path
					d="M33.545,4A11.235,11.235,0,0,0,24,9.143,11.235,11.235,0,0,0,14.455,4,11.476,11.476,0,0,0,3,15.429C3,26.857,24,44,24,44S45,26.857,45,15.429A11.476,11.476,0,0,0,33.545,4Z"
					fill="none"
					stroke="#000000"
				/>
			</g>
		</Icon>
	);
}

export default Heart;
