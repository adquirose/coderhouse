import React from "react";

const Loader = ({ size }) => {
	return (
		<div className="d-flex justify-content-center align-items-center pb-4">
			<div
				className="spinner-border"
				style={{ width: `${size}`, height: `${size}` }}
				role="status"
			/>
		</div>
	);
};
export default Loader;
