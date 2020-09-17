import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import "../styles/app.scss";
import * as API from "services/clubAPI";
import { ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";
import { useSelector, useDispatch } from "react-redux";
import { createClub } from 'redux/middlewares/resourcesMiddlewares'
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

  const onSubmit = async () => {
    if (clubName === "") {
      document.getElementById("notice_clubname").innerHTML =
        "Please fill in a club name";
    }

    let code = await dispatch(createClub({creationDate: creationDate, clubName: clubName, clubDescription: clubDescription, zipCode: zipCode, city: city, country: country, address: address, league: league, pool: pool, conference: conference, creatorId: creator_id}))   
    if (code === 201) {
      setRedirect(<Redirect to='/dashboardAdmin' />)
    } else {
      setRedirect(<Redirect to='/' />)

    }
  }

  function onChange2(date, dateString) {
    setCreationDate(dateString);
  }

  return (
    <ConfigProvider locale={frFR}>
      <div>
        <Row style={{ marginBottom: "2em" }}>
          <Col span={10} offset={8}>
            <h3>The club:</h3>
            <p className="mb-1 ml-2 text-muted">Founding date:</p>
            <DatePicker onChange={onChange2} />
            {creationDate !== "" && (
              <h6 style={{ marginTop: "2em" }}>Selected founding date: {creationDate}</h6>
            )}
          </Col>
        </Row>
     


        <Row>
          <Col span={8} offset={8}>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>Club name:</label>
              <input type="text" className="form-control" placeholder="Name" id="title" onChange={(e) => setClubName(e.target.value)} value={clubName} />
              <p id="notice_clubname" className="redtext"></p>
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>
                Club description
              </label>
              <input type="text" className="form-control" placeholder="Description" id="description" onChange={(e) => setClubDescription(e.target.value)} value={clubDescription} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>
                Club league
              </label>
              <input type="text" className="form-control" placeholder="League" id="league" onChange={(e) => setLeague(e.target.value)} value={league} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>
                Conference
              </label>
              <input type="text" className="form-control" placeholder="Conference" id="conference" onChange={(e) => setConference(e.target.value)} value={conference} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>Pool</label>
              <input type="text" className="form-control" placeholder="Pool" id="pool" onChange={(e) => setPool(e.target.value)} value={pool} />
            </div>
            <h3>Club address:</h3>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>
                Address of the club
              </label>
              <input type="text" className="form-control" placeholder="Address" id="adresse" onChange={(e) => setAddress(e.target.value)} value={address} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>Zip code</label>
              <input type="text" className="form-control" placeholder="Zip code" id="zipcode" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
            </div>

            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>City</label>
              <input type="text" className="form-control" placeholder="City" id="city" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>
            <div className="form-group row col-12">
              <label style={{ marginLeft: "1em", color: "grey" }}>Country</label>
              <input type="text" className="form-control" placeholder="Country" id="country" onChange={(e) => setCountry(e.target.value)} value={country} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={5} offset={11}>
            <button type="submit" className="btn btn-outline-primary" style={{ marginTop: "2em", marginBottom: "2em" }} onClick={onSubmit} >
              Save
            </button>
          </Col>
        </Row>
        {redirect}
      </div>
    </ConfigProvider>
  );
};

export default FormClub;
