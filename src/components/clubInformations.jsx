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
          <h5 className='font-weight-bold  mt-3 ml-5'>Club details:</h5>
          <div style={{marginLeft: '50px'}}>
          <Row>
            <h6 className="mr-2">Club name:</h6><p>{club.name}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Founded in:</h6><p>{club.date_of_creation}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Club description:</h6><p>{club.description}</p>
            </Row>
            <Row>
              <h6 className="mr-2">League:</h6><p>{club.league}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Pool:</h6><p>{club.pool}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Conference:</h6><p>{club.conference}</p>
            </Row>

            <Row>
              <h5 className="mr-2 mt-5">Club address:</h5>
            </Row>
            <Row>
              <h6 className="mr-2">Address:</h6><p>{club.address}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Zip code:</h6><p>{club.zip_code}</p>
            </Row>
            <Row>
              <h6 className="mr-2">City:</h6><p>{club.city}</p>
            </Row>
            <Row>
              <h6 className="mr-2">Country:</h6><p>{club.country}</p>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ClubInformations;
