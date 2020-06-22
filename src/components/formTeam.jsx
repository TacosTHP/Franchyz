import React, {useState} from "react";
import {Col, Row} from "antd";
import "../styles/app.scss";
import * as API from "services/teamAPI";
import {useSelector} from "react-redux";

const FormTeam = () => {
	const Creator_id = useSelector((state) => state.userReducer.id);
	const Club_id = useSelector((state) => state.userReducer.club_id);
	const Coach_id = useSelector((state) => state.userReducer.id);
	const [TeamName, setTeamName] = useState("");

	function onSubmit() {
		if (TeamName === "") {
			document.getElementById("notice_teamname").innerHTML =
				"Please fill in a team name";
		}
		console.log(TeamName);

		API.createTeam(TeamName, Creator_id, Coach_id, Club_id).then((response) => {
			console.log(response);
		});
	}

	return (
		<div>
			<div className="text-center">
				<div className="container">
					<div className="row d-flex align-items-center">
						<div className=" form-group col-4 text-center pb-3 p-2 mx-auto">
							<label style={{marginLeft: "10px", color: "grey"}}>Team name:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								id="title"
								onChange={(e) => setTeamName(e.target.value)}
								value={TeamName}
							/>
							<p id="notice_teamname" className="redtext"></p>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-outline-danger"
					style={{marginTop: "25px", marginBottom: "25px"}}
					onClick={onSubmit}
				>
					save
				</button>
			</div>
		</div>
	);
};

export default FormTeam;
