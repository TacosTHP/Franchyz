import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PlayerCard = (props) => {

  return (
    
    <div className="card mb-3" style="max-width: 540px;">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="..." className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.player.first_name} {props.player.last_name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PlayerCard;
