import React from "react";
import "./styles.css";

const Loader = () => {
	return (
		<div
			style={{
				display: "grid",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
export default Loader;
