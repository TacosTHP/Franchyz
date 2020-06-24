import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import moment from "moment";
import localization from "moment/locale/fr";
import { InputNumber } from "antd";
import "../styles/app.scss";
import { ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";
import { useSelector} from "react-redux";
import * as gameAPI from 'services/gameAPI'
import * as eventAPI from 'services/eventAPI'

const FormGame = ({ playersIds }) => {

  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const club_id = useSelector((state) => state.userReducer.club_id);
  const team_id = useSelector((state) => state.userReducer.team_id);


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

  async function onSubmit() {
    if (dateTime === "") {
      document.getElementById("notice_datetime").innerHTML =
        "Please fill in a start date";
    }
    if (eventTitle === "") {
      document.getElementById("notice_title").innerHTML =
        "Please fill in a title";
    }

    let game = await gameAPI.createGame(club_id, team_id, eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration)   
    if (playersIds !== undefined) {
      playersIds.forEach(async function (playerId) {
        await eventAPI.createEvent(game.id, playerId, 'game')
      })
    }
  }
  return (
    <ConfigProvider locale={frFR}>
      <div>
        <Row>
          <Col span={10} offset={8}>
            <h3>Competition:</h3>
            <label>Date and time of competition:</label>
            <br />
            <DatePicker id="datetime" format="DD-MM-YY HH:mm" disabledDate={disabledDate} onChange={onChange} onOk={onOk} showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }} />
            <p id="notice_datetime" className="redtext"></p>

            {dateTime !== "" && (
              <h6 style={{ marginTop: "25px" }}> Selected date and time: {dateTime}</h6>
            )}
            <label>Duration in min:</label>
            <br />
            <InputNumber style={{ marginBottom: "15px" }} defaultValue={0} step={5} min={0} max={100000} formatter={(valueMin) => `${valueMin}`} parser={(valueMin) => valueMin.replace(" min", "")} onChange={onChangeDuration} />
          </Col>
        </Row>

        <Row>
          <Col span={8} offset={8}>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Title:</label>
              <input type="text" className="form-control" placeholder="Title" id="title" onChange={(e) => setEventTitle(e.target.value)} value={eventTitle} />
              <p id="notice_title" className="redtext"></p>
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Description:</label>
              <input type="text" className="form-control" placeholder="Description" id="description" onChange={(e) => setEventDescription(e.target.value)} value={eventDescription} />
            </div>
            <h3>Address of location:</h3>
            <div className="form-group row col-12 ">
              <label style={{ marginLeft: "10px", color: "grey" }}>Address:</label>
              <input type="text" className="form-control" placeholder="Address" id="address" onChange={(e) => setAddress(e.target.value)} value={address} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Zip code:</label>
              <input type="text" className="form-control" placeholder="Zip code" id="zipcode" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>City:</label>
              <input type="text" className="form-control" placeholder="City" id="city" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Country:</label>
              <input type="text" className="form-control" placeholder="Country" id="country" onChange={(e) => setCountry(e.target.value)} value={country} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={5} offset={11}>
            <button type="submit" className="btn btn-outline-danger" style={{ marginTop: "25px", marginBottom: "25px" }} onClick={onSubmit} >
              Save
            </button>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default FormGame;
