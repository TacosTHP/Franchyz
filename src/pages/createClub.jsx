import FormClub from "components/formClub.jsx";
import React from "react";

function CreateEvents() {
	return (
		<div>
			<hr className="my-4 mt-5" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Create a club</h3>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<FormClub style={{ marginTop: "25px" }} />
		</div>
	);
}

export default CreateEvents;
