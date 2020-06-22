import React, {useState} from "react";
import {DatePicker, Col, Row} from "antd";
import moment from "moment";
import localization from "moment/locale/fr";
import {InputNumber} from "antd";
import "../styles/app.scss";
import * as API from "services/eventsAPI";
import {useSelector} from "react-redux";

const FormPractice = ({EventType, ClubId, TeamId}) => {
	const [DateTimeP, setDateTimeP] = useState("");
	const [DurationP, setDurationP] = useState("");
	const [EventTitleP, setEventTitleP] = useState("");
	const [EventDescriptionP, setEventDescriptionP] = useState("");
	const [ZipCodeP, setZipCodeP] = useState("");
	const [CityP, setCityP] = useState("");
	const [CountryP, setCountryP] = useState("");
	const [AddressP, setAddressP] = useState("");

	const Club_id = useSelector((state) => state.userReducer.coach_id);
	const Team_id = useSelector((state) => state.userReducer.team_id);

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log(EventType);
		// console.log("Selected Time: ", value);
		setDateTimeP(dateString);
		console.log("Formatted Selected Time: ", dateString);
	}

	function onChangeDuration(valueMin) {
		console.log(valueMin);
		setDurationP(valueMin);
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	function disabledDate(current) {
		return current && current < moment().endOf("day");
	}

	function onSubmit() {
		if (DateTimeP === "") {
			document.getElementById("notice_datetime").innerHTML = "Please slect a date";
		}
		if (EventTitleP === "") {
			document.getElementById("notice_title").innerHTML = "Please fill in a title";
		}

		console.log(
			EventTitleP,
			EventDescriptionP,
			AddressP,
			CityP,
			CountryP,
			ZipCodeP,
			DateTimeP,
			DurationP,
			Club_id,
			Team_id
		);

		API.createPractice(
			EventTitleP,
			EventDescriptionP,
			AddressP,
			CityP,
			CountryP,
			ZipCodeP,
			DateTimeP,
			DurationP,
			Club_id,
			Team_id
		).then((response) => console.log(response));
	}

	return (
		<div>
			<Row>
				<Col span={10} offset={8}>
					<h3>Training:</h3>
					<label>Start date:</label>
					<br />
					<DatePicker
						id="datetime"
						format="DD-MM-YY HH:mm"
						disabledDate={disabledDate}
						onChange={onChange}
						onOk={onOk}
						showTime={{defaultValue: moment("00:00:00", "HH:mm:ss")}}
					/>
					<p id="notice_datetime" className="redtext"></p>

					{DateTimeP !== "" && (
						<h6 style={{marginTop: "25px"}}> Selected date: {DateTimeP}</h6>
					)}
					<label>Duration:</label>
					<br />
					<InputNumber
						style={{marginBottom: "15px"}}
						defaultValue={0}
						step={5}
						min={0}
						max={100000}
						formatter={(valueMin) => `${valueMin} min`}
						parser={(valueMin) => valueMin.replace(" min", "")}
						onChange={onChangeDuration}
					/>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={8}>
					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Title:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Title"
							id="title"
							onChange={(e) => setEventTitleP(e.target.value)}
							value={EventTitleP}
						/>
						<p id="notice_title" className="redtext"></p>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Description:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Description"
							id="description"
							onChange={(e) => setEventDescriptionP(e.target.value)}
							value={EventDescriptionP}
						/>
					</div>
					<h3>Address of training location:</h3>
					<div className="form-group row col-12 ">
						<label style={{marginLeft: "10px", color: "grey"}}>
							Street and building number:
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Address"
							id="address"
							onChange={(e) => setAddressP(e.target.value)}
							value={AddressP}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Zip code:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Zip code"
							id="zipcode"
							onChange={(e) => setZipCodeP(e.target.value)}
							value={ZipCodeP}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>City:</label>
						<input
							type="text"
							className="form-control"
							placeholder="City"
							id="city"
							onChange={(e) => setCityP(e.target.value)}
							value={CityP}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Country:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Country"
							id="country"
							onChange={(e) => setCountryP(e.target.value)}
							value={CountryP}
						/>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={5} offset={11}>
					<button
						type="submit"
						className="btn btn-outline-danger"
						style={{marginTop: "25px", marginBottom: "25px"}}
						onClick={onSubmit}
					>
						Save
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default FormPractice;
