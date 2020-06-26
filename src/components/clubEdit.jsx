import React, { useState, useEffect } from 'react';
import * as clubAPI from 'services/clubAPI';
import { Col, Row } from 'antd';
import { message} from 'antd';
import { useHistory } from "react-router-dom";

const ClubEdit = ({club}) => {
  const clubId = club.id;
  let history = useHistory();
  const [data, setData] = useState([]);
  useEffect(getData, []);

  async function getData() {
    await setData({
      name: club.name,
      date_of_creation: club.date_of_creation,
      description: club.description,
      league: club.league,
      pool: club.pool,
      conference: club.conference,
      address: club.address,
      zip_code: club.zip_code,
      city: club.city,
      country: club.country,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    clubAPI.editClub({
      id: clubId,
      fields: {data},
    })
    .then(() =>  message.success('You edited successfully your club', 2.5))
  
  };

  let test = '';

  return (
    <form onSubmit={submit}>
      <small>{test}</small>
      <Row>
        <Col style={{marginLeft: '20px'}}>
          <h6 className='font-weight-bold'>Club details:</h6>
          <div>
          <div>
              <label>Club name:</label>
              <input type='text' placeholder={(data.name === null) ? 'Club name' : null } value={(data.name === null) ? '' : data.name} onChange={e => setData({...data, name: e.target.value })} />
            </div>
            <div>
              <label>Founded in:</label>
              <input  type='date' placeholder={(data.date_of_creation === null) ? 'Date of creation' : null } value={(data.date_of_creation === null) ? '' : data.date_of_creation} onChange={e => setData({...data, date_of_creation: e.target.value })} />
            </div>
            <div>
              <label>Club description:</label>
              <textarea rows='1' placeholder={(data.description === null) ? 'Description' : null } value={(data.description === null) ? '' : data.description} onChange={e => setData({...data, description: e.target.value })} />
            </div>
            <div>
              <label>League:</label>
              <input type='text' placeholder={(data.league === null) ? 'League' : null } value={(data.league === null) ? '' : data.league} onChange={e => setData({...data, league: e.target.value })} />
            </div>
            <div>
              <label>Pool:</label>
              <input type='text' placeholder={(data.pool === null) ? 'Pool' : null } value={(data.pool === null) ? '' : data.pool} onChange={e => setData({...data, pool: e.target.value })} />
            </div>
            <div>
              <label>Conference:</label>
              <input type='text' placeholder={(data.conference === null) ? 'Conference' : null } value={(data.conference === null) ? '' : data.conference} onChange={e => setData({...data, conference: e.target.value })} />
            </div>
          </div>
        </Col>
        <Col style={{marginLeft: '50px'}}>
          <div>
            <h6 className='font-weight-bold'>Club address:</h6>
            <div>
              <label>Address:</label>
              <input type='text' placeholder={(data.address === null) ? 'Address' : null } value={(data.address === null) ? '' : data.address} onChange={e => setData({...data, address: e.target.value })} />
            </div>
            <div>
              <label>Zip code:</label>
              <input type='text' placeholder={(data.zip_code === null) ? 'Zip code' : null } value={(data.zip_code === null) ? '' : data.zip_code} onChange={e => setData({...data, zip_code: e.target.value })} />
            </div>
            <div>
              <label>City:</label>
              <input type='text' placeholder={(data.city === null) ? 'City' : null } value={(data.city === null) ? '' : data.city} onChange={e => setData({...data, city: e.target.value })} />
            </div>
            <div>
              <label>Country:</label>
              <input type='text' placeholder={(data.country === null) ? 'Country' : null } value={(data.country === null) ? '' : data.country} onChange={e => setData({...data, country: e.target.value })} />
            </div>
          </div>
        </Col>
      </Row>
      <button type='submit' className='btn btn-primary'>Save</button>
    </form>
  );
};

export default ClubEdit;
