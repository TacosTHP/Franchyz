import React, {useState, useEffect} from "react";
import FormGame from "components/formGame.jsx";
import {Select} from "antd";
import FormPractice from "components/formPractice";
import PlayerList from "components/playerList";
import {useSelector, useDispatch} from "react-redux";
import useCheckboxChange from "customHooks/useCheckboxChange";
import * as teamAPI from "services/teamAPI";

function CreateEvents() {
	const clubId = useSelector((state) => state.userReducer.club_id);
	const [eventType, setEventType] = useState("");
	const [teams, setTeams] = useState("");
	const [players, setPlayers] = useState("");
	const [checkbox, handleCheckboxChange] = useCheckboxChange();

	const {Option} = Select;

	useEffect(() => {
		setupTeams();
	}, []);

	async function setupTeams() {
		const ans = await teamAPI.getTeamsOfClub(clubId);
		setTeams(ans);
		setPlayers(
			<PlayerList
				players={ans[1].players}
				handleCheckboxChange={handleCheckboxChange}
				checkbox={checkbox}
			/>
		);
	}

	function onChange(value) {
		setEventType(value);
	}

	function test() {
		console.log(checkbox);
	}

	return (
		<div>
			<button onClick={test}> test </button>
			iiiiiiii
			{checkbox.lenght}
			<br />
			<br />
			<hr className="my-4" style={{width: "600px"}}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{width: "35%"}}
			>
				<h3 className="text-light text-center">Choose the event type!</h3>
				<div className="text-center">
					<Select
						className="text-center"
						showSearch
						style={{width: 300}}
						placeholder="Select the event type"
						optionFilterProp="children"
						onChange={onChange}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="game">Competition</Option>
						<Option value="practice">Training</Option>
					</Select>
				</div>
			</div>
			<hr className="my-4" style={{width: "600px"}}></hr>
			{players}
			{eventType === "game" ? (
				<FormGame style={{marginTop: "25px"}} eventType={eventType} />
			) : (
				<FormPractice style={{marginTop: "25px"}} eventType={eventType} />
			)}
		</div>
	);
}

export default CreateEvents;
