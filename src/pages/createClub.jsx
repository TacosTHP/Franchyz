import FormClub from "components/formClub.jsx";
import React, { useState, useEffect } from "react";
import { Select } from "antd";
import * as API from "services/coachesAPI";

function CreateEvents() {
	const [EventType, setEventType] = useState("");
	const [ClubId, setClubId] = useState("");
	const [TeamId, setTeamId] = useState("");
	const { Option } = Select;

	function onChange(value) {
		console.log(`selected ${value}`);
		setEventType(value);
	}

	//Attentio nà activer!
	// useEffect(
	// 	API.getClubId().then((response) => setClubId),
	// 	[ClubId]
	// );

	return (
		<div>
			<br />
			<br />
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Créer ton club</h3>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<FormClub
				style={{ marginTop: "25px" }}
				EventType={EventType}
				ClubId={ClubId}
				TeamId={TeamId}
			/>
		</div>
	);
}

export default CreateEvents;