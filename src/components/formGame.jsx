import React, {useState} from "react";
import {DatePicker, Col, Row} from "antd";
import moment from "moment";
import localization from "moment/locale/fr";
import {InputNumber} from "antd";
import "../styles/app.scss";
import * as API from "services/eventsAPI";
import {useSelector, useDispatch} from "react-redux";
import {callAPI} from "redux/middlewares/resourcesMiddlewares";

const FormGame = ({EventType, ClubId, TeamId}) => {
	const [dateTime, setDateTime] = useState("");
	const [duration, setDuration] = useState("");
	const [eventTitle, setEventTitle] = useState("");
	const [eventDescription, setEventDescription] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [address, setAddress] = useState("");

	const club_id = useSelector((state) => state.userReducer.coach_id);
	const team_id = useSelector((state) => state.userReducer.team_id);

	const dispatch = useDispatch();

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		setDateTime(dateString);
	}

	function onChangeDuration(valueMin) {
		setDuration(valueMin);
	}

	function onOk(value) {
		setDuration(value);
	}

	function disabledDate(current) {
		return current && current < moment().endOf("day");
	}

	function onSubmit() {
		if (dateTime === "") {
			document.getElementById("notice_datetime").innerHTML =
				"Merci de choisir une date";
		}
		if (eventTitle === "") {
			document.getElementById("notice_title").innerHTML =
				"Merci de saisir un titre";
		}

		dispatch(
			callAPI("createGame", {
				eventTitle: eventTitle,
				eventDescription: eventDescription,
				address: address,
				city: city,
				country: country,
				zipCode: zipCode,
				dateTime: dateTime,
				duration: duration,
				club_id,
				team_id,
			})
		);
		//API.createGame( eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration, club_id, team_id).then((response) => console.log(response));
	}
	return (
		<div>
			<Row>
				<Col span={10} offset={8}>
					<h3>Competition:</h3>
					<label>Start date of the competition:</label>
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

					{dateTime !== "" && (
						<h6 style={{marginTop: "25px"}}> Slected date: {dateTime}</h6>
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
							onChange={(e) => setEventTitle(e.target.value)}
							value={eventTitle}
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
							onChange={(e) => setEventDescription(e.target.value)}
							value={eventDescription}
						/>
					</div>
					<h3>Address of the location:</h3>
					<div className="form-group row col-12 ">
						<label style={{marginLeft: "10px", color: "grey"}}>Address:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Address"
							id="address"
							onChange={(e) => setAddress(e.target.value)}
							value={address}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Zip code:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Zip code"
							id="zipcode"
							onChange={(e) => setZipCode(e.target.value)}
							value={zipCode}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>City:</label>
						<input
							type="text"
							className="form-control"
							placeholder="City"
							id="city"
							onChange={(e) => setCity(e.target.value)}
							value={city}
						/>
					</div>

					<div className="form-group row col-12">
						<label style={{marginLeft: "10px", color: "grey"}}>Country:</label>
						<input
							type="text"
							className="form-control"
							placeholder="Country"
							id="country"
							onChange={(e) => setCountry(e.target.value)}
							value={country}
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

export default FormGame;
