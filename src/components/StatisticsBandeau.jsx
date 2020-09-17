import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';

import variables from 'styles/_scss-variables.scss';

const StatisticsBandeau = ({ statisticObject }) => {
  const valueStyling = {
    color: variables.primaryColor,
    fontWeight: 'bold',
    fontSize: '3em',
  };

  const titleStyling = {
    color: variables.whiteColor,
    fontSize: '2em',
  };

  const setupElements = () => {
    let content;
    if (statisticObject !== undefined) {
      content = (
        <>
          <div>
            <Statistic
              value={statisticObject.first_resource.property_value}
              valueStyle={valueStyling}
            />
            <p style={titleStyling}>{statisticObject.third_resource.property_title}</p>
          </div>
          <div>
            <Statistic
              value={statisticObject.second_resource.property_value}
              valueStyle={valueStyling}
            />
            <p style={titleStyling}>{statisticObject.third_resource.property_title}</p>
          </div>
          <div>
            <Statistic
              value={statisticObject.third_resource.property_value}
              valueStyle={valueStyling}
            />
            <p style={titleStyling}>{statisticObject.third_resource.property_title}</p>
          </div>
        </>
      );
    }
    return content;
  };
  return (
    <div className="container-fluid text-center py-3 bg-dark">
      <h2 className="my-5 text-white">En quelques chiffres</h2>
      <div className="d-flex justify-content-around my-5">
        { setupElements() }
      </div>
    </div>
  );
};

export default StatisticsBandeau;

StatisticsBandeau.propTypes = {
  statisticObject: PropTypes.shape({
    first_resource: PropTypes.shape({
      property_title: PropTypes.string,
      property_value: PropTypes.number,
    }),
    second_resource: PropTypes.shape({
      property_title: PropTypes.string,
      property_value: PropTypes.number,
    }),
    third_resource: PropTypes.shape({
      property_title: PropTypes.string,
      property_value: PropTypes.number,
    }),
  }),
};

StatisticsBandeau.defaultProps = {
  statisticObject: {
    first_resource: {
      property_title: 'Title',
      property_value: 1000,
    },
    second_resource: {
      property_title: 'Title',
      property_value: 1000,
    },
    third_resource: {
      property_title: 'Title',
      property_value: 1000,
    },
  },
};
