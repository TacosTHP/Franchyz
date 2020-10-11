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

  return (
    <div className="container-fluid text-center py-3 bg-dark">
      <h2 className="my-5 text-white">Some numbers...</h2>
      <div className="d-flex justify-content-around my-5">
        <div>
          <Statistic
            value={statisticObject.first_resource.value}
            valueStyle={valueStyling}
          />
          <p style={titleStyling}>{statisticObject.first_resource.title}</p>
        </div>
        <div>
          <Statistic
            value={statisticObject.second_resource.value}
            valueStyle={valueStyling}
          />
          <p style={titleStyling}>{statisticObject.second_resource.title}</p>
        </div>
        <div>
          <Statistic
            value={statisticObject.third_resource.value}
            valueStyle={valueStyling}
          />
          <p style={titleStyling}>{statisticObject.third_resource.title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBandeau;

StatisticsBandeau.propTypes = {
  statisticObject: PropTypes.shape({
    first_resource: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
    }),
    second_resource: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
    }),
    third_resource: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
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
