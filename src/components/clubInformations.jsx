import React from 'react';
import { Avatar, Col, Row } from 'antd';

const ClubInformations = ({club}) => {
	return (
		<div className='container scrolly '>
			<Row>
				<Col>
					{club.logo_url === null || 'undefined' ? (
						<Avatar size={50}>LOGO</Avatar>
					) : (
						<img src={club.logo_url} alt='logo' className='mt-5'></img>
					)}
				</Col>
				<Col>
					<h6 className='font-weight-bold  mt-3 ml-5'>Club details:</h6>
					<div style={{marginLeft: '50px'}}>
						<p>Club name: {club.name}</p>
						<p> Founded in: {club.date_of_creation}</p>
						<p> Club description: {club.description}</p>
						<p>League: {club.league}</p>
						<p>Pool: {club.pool}</p>
						<p>Conference: {club.conference}</p>
					</div>
				</Col>
			</Row>
			<div style={{marginLeft: '100px'}}>
				<h6 className='font-weight-bold mt-2'>Club address:</h6>
				<p>Address: {club.address}</p>
				<p>Zip code: {club.zip_code}</p>
				<p>City: {club.city}</p>
				<p>Country: {club.country}</p>
			</div>
		</div>
	);
};

export default ClubInformations;
