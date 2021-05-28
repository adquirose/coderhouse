import React from "react";

const Loader = () => {
	return (
		<div className="d-flex justify-content-center align-items-center pb-4">
			<div className="spinner-border" style={{width: '3rem', height:'3rem'}} role="status" />
		</div>
	);
};
export default Loader;
