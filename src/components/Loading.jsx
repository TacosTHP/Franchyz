import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import colors from 'styles/_scss-variables.scss';

const Loading = () => {
  const outlineStyle = (
    <LoadingOutlined
      style={{ color: colors.primaryColor, fontSize: 24 * 8 }}
    />
  );

  return (
    <div className="bg-dark loading-animation d-flex flex-column justify-content-center align-items-center py-5">
      <Spin indicator={outlineStyle} />
      <h1 className="text-primary mt-5">Loading...</h1>
    </div>
  );
};

export default Loading;
