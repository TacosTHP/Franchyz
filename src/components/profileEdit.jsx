import React, { useState } from 'react';
import * as userAPI from '../services/userAPI.jsx';
import { useParams } from 'react-router-dom'
import { message} from 'antd';
import { useHistory } from "react-router-dom";


const ProfileEdit = ({player}) => {

  const [data, setData] = useState(
    {
      first_name: player.first_name,
      last_name: player.last_name,
      phone: player.phone,
      birthdate: player.birthdate,
      arrival: player.arrival,
      'admin?': player['admin?'],
      club_id: player.club_id,
    })

  let { clubId, teamId, playerId } = useParams();
  let history = useHistory();

  const renderForm = () => {
    return (
      <div>
        <div className='form-group'>
          <label>Availability :</label>
          <select className='form-control' onChange={e => setData({...data, 'availability?': e.target.value })}>
            <option value='false'>Not available</option>
            <option value='true'>Available</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Height (cm) :</label>
          <input className='form-control' type='number' min='0' placeholder={(data.height === null) ? '170' : null } value={(data.height === null) ? '' : data.height} onChange={e => setData({...data, height: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Weight (kg) :</label>
          <input className='form-control' type='number' min='0' placeholder={(data.weight === null) ? '85' : null } value={(data.weight === null) ? '' : data.weight} onChange={e => setData({...data, weight: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Current Gender :</label>
          <p>{data.gender}</p>
          <select className='form-control' onChange={e => setData({...data, gender: e.target.value })}>
            <option value="" selected disabled hidden> Choose an option </option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Jersey Number :</label>
          <input className='form-control' type='number' min='0' placeholder={(data.jersey_number === null) ? '9' : null } value={(data.jersey_number === null) ? '' : data.jersey_number} onChange={e => setData({...data, jersey_number: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Current position :</label>
          <p>{data.position}</p>
          <select className='form-control' onChange={e => setData({...data, position: e.target.value })}>
            <option value='' selected disabled hidden>Choose an option</option>
            <option value='' disabled>OFFENSE</option>
            <option value='QB'>QUATERBACK</option>
            <option value='HB'>HALFBACK</option>
            <option value='FB'>FULLBACK</option>
            <option value='LT'>LEFT TACKLE</option>
            <option value='LG'>LEFT GUARD</option>
            <option value='C'>CENTER</option>
            <option value='RG'>RIGHT GUARD</option>
            <option value='RT'>RIGHT TACKLE</option>
            <option value='TE'>TIGHT-END</option>
            <option value='WR'>WIDE RECEIVER</option>
            <option value='' disabled>DEFENSE</option>
            <option value='FS'>FREE SAFETY</option>
            <option value='SS'>STRONG SAFETY</option>
            <option value='CB'>CORNERBACK</option>
            <option value='DT'>DEFENSIVE TACKLE</option>
            <option value='LE'>LEFT DEFENSIVE-END</option>
            <option value='RE'>RIGHT DEFENSIVE-END</option>
            <option value='LOLB'>LEFT OUTSIDE LINEBACKER</option>
            <option value='MLB'>MIDDLE LINEBACKER</option>
          </select>
        </div>
      </div>
    );
  };

  const submit = async (event) => {
    event.preventDefault();
    let response = userAPI.playerUpdate({ clubId: clubId, teamId: teamId, playerId: playerId, data: data, })
    .then(() => message.success('You successfully edited your profile', 2.5),  history.push("/dashboardPlayer"))
    setData(response)
  };

  return (
    <div className="container">
      <h1>My Profile</h1>
      <form className='form p-4 mt-3 mb-3 rounded' onSubmit={submit}>
        <div className='form-group'>
          <label>First Name :</label>
          <input className="form-control" type="text" placeholder={data.first_name === null ? "John" : null} value={data.first_name === null ? "" : data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Last Name :</label>
          <input className="form-control" type="text" placeholder={data.last_name === null ? "Doe" : null} value={data.last_name === null ? "" : data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Phone :</label>
          <input className='form-control' type='tel' placeholder={(data.phone === null) ? '0623451789' : null } value={(data.phone === null) ? '' : data.phone} onChange={e => setData({...data, phone: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Birthdate :</label>
          <input className="form-control" type="date" placeholder={data.birthdate === null ? "2018-07-22" : null} value={data.birthdate === null ? "" : data.birthdate} onChange={(e) => setData({ ...data, birthdate: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Arrival :</label>
          <input className="form-control" type="date" placeholder={data.arrival === null ? "2018-07-22" : null} value={data.arrival === null ? "" : data.arrival} onChange={(e) => setData({ ...data, arrival: e.target.value })} />
        </div>
        {renderForm()}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
