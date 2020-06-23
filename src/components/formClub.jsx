import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import "../styles/app.scss";
import * as API from "services/clubAPI";
import { ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";
import { useSelector, useDispatch } from "react-redux";
import { callAPI } from 'redux/middlewares/resourcesMiddlewares'
import { Redirect } from 'react-router-dom'
 
const FormClub = () => {
  const creator_id = useSelector((state) => state.userReducer.id);
  const [creationDate, setCreationDate] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [league, setLeague] = useState("");
  const [pool, setPool] = useState("");
  const [conference, setConference] = useState("");


  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch();

  function onSubmit() {
    if (clubName === "") {
      document.getElementById("notice_clubname").innerHTML =
        "Merci de saisir un nom du club";
    }

    let ok = dispatch(callAPI('createClub', {creationDate: creationDate, clubName: clubName, clubDescription: clubDescription, zipCode: zipCode, city: city, country: country, address: address, league: league, pool: pool, conference: conference, creatorId: creator_id}))   
    //API.createClub(creationDate, clubName, clubDescription, zipCode, city, country, address, league, pool, conference, creator_id)
    setRedirect(<Redirect to='/' />)
  }

  function onChange2(date, dateString) {
    setCreationDate(dateString);
  }

  return (
    <ConfigProvider locale={frFR}>
      <div>
        <Row>
          <Col span={10} offset={8}>
            <h3>Le club:</h3>
            <label>Date de création du club:</label>
            <br />
            <DatePicker onChange={onChange2} />
            {creationDate !== "" && (
              <h6 style={{ marginTop: "25px" }}>Date création club: {creationDate}</h6>
            )}
          </Col>
        </Row>
        <br />

        <Row>
          <Col span={8} offset={8}>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Nom du club:</label>
              <input type="text" className="form-control" placeholder="Nom" id="title" onChange={(e) => setClubName(e.target.value)} value={clubName} />
              <p id="notice_clubname" className="redtext"></p>
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>
                Déscription du club
              </label>
              <input type="text" className="form-control" placeholder="Déscription" id="description" onChange={(e) => setClubDescription(e.target.value)} value={clubDescription} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>
                League du club
              </label>
              <input type="text" className="form-control" placeholder="League" id="league" onChange={(e) => setLeague(e.target.value)} value={league} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>
                Conference du club
              </label>
              <input type="text" className="form-control" placeholder="Conference" id="conference" onChange={(e) => setConference(e.target.value)} value={conference} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Pool</label>
              <input type="text" className="form-control" placeholder="Pool" id="pool" onChange={(e) => setPool(e.target.value)} value={pool} />
            </div>
            <h3>L'adresse du club:</h3>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>
                L'adresse du club
              </label>
              <input type="text" className="form-control" placeholder="L'adresse" id="adresse" onChange={(e) => setAddress(e.target.value)} value={address} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Code postal</label>
              <input type="text" className="form-control" placeholder="Code postal" id="zipcode" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Ville</label>
              <input type="text" className="form-control" placeholder="Ville" id="city" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "10px", color: "grey" }}>Pays</label>
              <input type="text" className="form-control" placeholder="Pays" id="country" onChange={(e) => setCountry(e.target.value)} value={country} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={5} offset={11}>
            <button type="submit" className="btn btn-outline-danger" style={{ marginTop: "25px", marginBottom: "25px" }} onClick={onSubmit} >
              sauvegarder
            </button>
          </Col>
        </Row>
        {redirect}
      </div>
    </ConfigProvider>
  );
};

export default FormClub;
