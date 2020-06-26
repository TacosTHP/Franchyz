import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as gameAPI from 'services/gameAPI';

const GameEdit = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const { teamId, gameId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {getData()}, []);

  const getData = async () => {
    const response = await gameAPI.getGame(clubId, teamId, gameId);
    const games = response.game;
    setData({
      title: games.title,
      long_description: games.long_description,
      starting_date_time: games.starting_date_time,
      duration: games.duration,
      address: games.address,
      zip_code: games.zip_code,
      city: games.city,
      country: games.country,
      canceled: games.canceled,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    gameAPI.editGame({
      clubId: clubId,
      teamId: teamId,
      gameId: gameId,
      fields: {data},
    });
  };

  let test = '';
  // test = JSON.stringify(data);

  return (
    <form onSubmit={submit}>
      <small>{test}</small>
      <div className='form-group'>
        <label>Title:</label>
        <input type='text' className='form-control' placeholder={(data.title === null) ? 'Game title' : null } value={(data.title === null) ? '' : data.title} onChange={e => setData({...data, title: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Description:</label>
        <textarea className='form-control' rows='1' placeholder={(data.long_description === null) ? 'Game description' : null } value={(data.long_description === null) ? '' : data.long_description} onChange={e => setData({...data, long_description: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Date:</label>
        <input className='form-control' type='date' placeholder={(data.starting_date_time === null) ? 'Game date' : null } value={(data.starting_date_time === null) ? '' : data.starting_date_time} onChange={e => setData({...data, starting_date_time: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Duration:</label>
        <input className='form-control' type='time' placeholder={(data.duration === null) ? 'Game duration' : null } value={(data.duration === null) ? '' : data.duration} onChange={e => setData({...data, duration: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Address:</label>
        <input type='text' className='form-control' placeholder={(data.address === null) ? 'Game address' : null } value={(data.address === null) ? '' : data.address} onChange={e => setData({...data, address: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Zip Code:</label>
        <input type='text' className='form-control' placeholder={(data.zip_code === null) ? 'Game zip_code' : null } value={(data.zip_code === null) ? '' : data.zip_code} onChange={e => setData({...data, zip_code: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>City:</label>
        <input type='text' className='form-control' placeholder={(data.city === null) ? 'Game city' : null } value={(data.city === null) ? '' : data.city} onChange={e => setData({...data, city: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Country:</label>
        <input type='text' className='form-control' placeholder={(data.country === null) ? 'Game country' : null } value={(data.country === null) ? '' : data.country} onChange={e => setData({...data, country: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Cancel:</label>
        <select className='form-control' onChange={e => setData({...data, 'canceled': e.target.value })}>
          <option value='false'>False</option>
          <option value='true'>True</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default GameEdit;
