import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, DatePicker, InputNumber,
} from 'antd';
import moment from 'moment';

const PracticeNewForm = ({ handleInputChange }) => {
  const disabledDate = (current) => current && current < moment().endOf('minute');

  const onDateChange = (date, dateString) => {
    const dateInput = { currentTarget: { name: 'datetime', value: dateString } };
    handleInputChange(dateInput);
  };

  const onDurationChange = (value) => {
    const dateInput = { currentTarget: { name: 'duration', value } };
    handleInputChange(dateInput);
  };

  return (
    <Form labelCol={{ span: 2 }} wrapperCol={{ span: 20 }} name="gameForm" className="mt-4">
      <Form.Item label="Practice Title">
        <Input id="title" name="title" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="Description">
        <Input id="description" name="description" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="Address">
        <Input id="address" name="address" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="Zip Code">
        <Input id="zipCode" name="zipCode" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="City">
        <Input id="city" name="city" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="Country">
        <Input id="country" name="country" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item label="Date">
        <DatePicker id="datetime" name="datetime" format="YYYY-MM-DD HH:mm" disabledDate={disabledDate} showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} onChange={onDateChange} />
      </Form.Item>
      <Form.Item label="Duration">
        <InputNumber name="duration" onChange={onDurationChange} />
      </Form.Item>
    </Form>
  );
};

export default PracticeNewForm;

PracticeNewForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
