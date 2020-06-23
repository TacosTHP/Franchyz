import FormTeam from "components/formTeam.jsx";
import React from "react";
import { Col, Row } from "antd";

function CreateTeams() {
	return (
		<div>
			<br />
			<br />
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Création team</h3>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>

			<FormTeam style={{ marginTop: "25px" }} />
		</div>
	);
}

export default CreateTeams;
