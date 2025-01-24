import React from "react";
import "./Loading.css";

export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="loader">
				<div className="loader-inner">
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
					<div className="loader-block"></div>
				</div>
			</div>
		</div>
	);
}
