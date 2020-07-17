import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import localization from 'moment/locale/fr';
import * as practiceAPI from 'services/practiceAPI';

const PracticeShow = () => {
  let { practicesId } = useParams();
  const [practice, setPractice] = useState({});
  moment.updateLocale('fr', localization);

  const setupPage = () => {
    let content;
    if (practicesId !== undefined) {
      content = (
        <>
          <div className="card mx-auto">
            <div className="card-header">
              <div className="text-uppercase">
                {practice.title}
              </div>
            </div>
            <div className="card-body">
              <h6>Location</h6>
              <p>
                {practice.address}
              </p>
              <p>
                {practice.city}
              </p>
              <p>
                {practice.zip_code}
                {practice.country}
              </p>
              <h6> Date and Time </h6>
              <p>
                {moment(practice.starting_date_time).format('LLLL')}
              </p>
              <h6> Duration in min: </h6>
              <p>
                {practice.duration}
              </p>
              {
                practice.canceled !== 'false'
                  ? ''
                  : <h6 className="redtext">The event is canceled.</h6>
              }
            </div>
          </div>
        </>
      );
    } else {
      content = (
        <>
          <h3 className="text-center redtext mt-5">This practice does not exist.</h3>
        </>
      );
    }
    return content;
  };

  useEffect(() => {
    practiceAPI.getPractice(practicesId)
      .then((response) => {
        setPractice(response.practice);
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
        { setupPage() }
      </div>
    </>
  );
};

export default PracticeShow;
