import React, { useEffect, useState } from 'react';
import * as userAPI from '../services/userAPI.jsx';
import { useSelector } from 'react-redux';

const ProfileEdit = () => {
	const user_id = useSelector(state => state.userReducer.id);
	const user_type = useSelector(state => state.authReducer.typeUser);
	const [data, setData] = useState([]);
	useEffect(getData, []);

	async function getData() {
		const response = await userAPI.profile(user_id, user_type);
		if (user_type === 'coach') {
			setData({
				first_name: response.first_name,
				last_name: response.last_name,
				phone: response.phone,
				birthdate: response.birthdate,
				arrival: response.arrival,
				'admin?': response['admin?'],
				club_id: response.club_id,
			});
		} else if (user_type === 'player') {
			setData({
				first_name: response.first_name,
				last_name: response.last_name,
				phone: response.phone,
				birthdate: response.birthdate,
				arrival: response.arrival,
				'availability?': response['availability?'],
				height: response.height,
				weight: response.weight,
				gender: response.gender,
				jersey_number: response.jersey_number,
				position: response.position,
				team_id: response.team_id,
			});		
		};
	};

	const renderForm = () => {
		if (user_type === 'coach') {
			return null;
		} else if (user_type === 'player') {
			return (
				<div>
					<div className='form-group'>
						<label>Availability :</label>
						<select
							className='form-control'
							onChange={e => setData({...data, 'availability?': e.target.value })}
						>
							<option value='false'>Not available</option>
							<option value='true'>Available</option>
						</select>
					</div>

					<div className='form-group'>
						<label>Height (cm) :</label>
						<input
							className='form-control'
							type='number'
							min='0'
							placeholder={(data.height === null) ? '170' : null }
							value={(data.height === null) ? '' : data.height}
							onChange={e => setData({...data, height: e.target.value })}
						/>
					</div>

					<div className='form-group'>
						<label>Weight (kg) :</label>
						<input
							className='form-control'
							type='number'
							min='0'
							placeholder={(data.weight === null) ? '85' : null }
							value={(data.weight === null) ? '' : data.weight}
							onChange={e => setData({...data, weight: e.target.value })}
						/>
					</div>

					<div className='form-group'>
						<label>Current Gender :</label>
						<p>{data.gender}</p>
						<select
							className='form-control'
							onChange={e => setData({...data, gender: e.target.value })}
						>
							<option value='' selected disabled hidden>Choose an option</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</select>
					</div>

					<div className='form-group'>
						<label>Jersey Number :</label>
						<input
							className='form-control'
							type='number'
							min='0'
							placeholder={(data.jersey_number === null) ? '9' : null }
							value={(data.jersey_number === null) ? '' : data.jersey_number}
							onChange={e => setData({...data, jersey_number: e.target.value })}
						/>
					</div>

					<div className='form-group'>
						<label>Current position :</label>
						<p>{data.position}</p>
						<select
							className='form-control'
							onChange={e => setData({...data, position: e.target.value })}
						>
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
	};

	const submit = (event) => {
		event.preventDefault();
		userAPI.profileUpdate({
			id: user_id,
			type: user_type,
			fields: {data},
		});
	};

	let test = '';
	// test = JSON.stringify(data);

	return (
		<div>
			<h1>My Profile</h1>
			<small>{test}</small>

			<form className='form p-4 mt-3 mb-3 rounded' onSubmit={submit}>

				<div className='form-group'>
					<label>First Name :</label>
					<input
						className='form-control'
						type='text'
						placeholder={(data.first_name === null) ? 'John' : null }
						value={(data.first_name === null) ? '' : data.first_name}
						onChange={e => setData({...data, first_name: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Last Name :</label>
					<input
						className='form-control'
						type='text'
						placeholder={(data.last_name === null) ? 'Doe' : null }
						value={(data.last_name === null) ? '' : data.last_name}
						onChange={e => setData({...data, last_name: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Phone :</label>
					<input
						className='form-control'
						type='tel'
						placeholder={(data.phone === null) ? '0623451789' : null }
						value={(data.phone === null) ? '' : data.phone}
						onChange={e => setData({...data, phone: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Birthdate :</label>
					<input
						className='form-control'
						type='date'
						placeholder={(data.birthdate === null) ? '2018-07-22' : null }
						value={(data.birthdate === null) ? '' : data.birthdate}
						onChange={e => setData({...data, birthdate: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Arrival :</label>
					<input
						className='form-control'
						type='date'
						placeholder={(data.arrival === null) ? '2018-07-22' : null }
						value={(data.arrival === null) ? '' : data.arrival}
						onChange={e => setData({...data, arrival: e.target.value })}
					/>
				</div>

				{renderForm()}

				<button type='submit' className='btn btn-primary'>Submit</button>

			</form>
		</div>
	);
};

export default ProfileEdit;
