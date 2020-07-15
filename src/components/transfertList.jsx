import React, { useState, useEffect } from 'react';
import { Space, Transfer, Switch } from 'antd';
import PropTypes from 'prop-types';

const TransfertList = ({ players, setValidateKeys }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [targetKeys, setTargetKeys] = useState([]);
  const [data, setData] = useState([]);

  const handleChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
    setValidateKeys(nextTargetKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const handleDisable = (disabled) => {
    setDisabled(disabled);
  };

  useEffect(() => {
    setData(players.map((player) => ({ key: player.id, title: player.first_name })));
  }, [players]);

  return (
    <div>
      <h3> Choose players </h3>
      <Transfer dataSource={data} titles={['Source', 'Target']} targetKeys={targetKeys} selectedKeys={selectedKeys} onChange={handleChange} onSelectChange={handleSelectChange} render={(item) => item.title} disabled={disabled} />

      <Space style={{ marginTop: 16 }}>
        <Switch unCheckedChildren="disabled" checkedChildren="disabled" checked={disabled} onChange={handleDisable} />
      </Space>
    </div>
  );
};

export default TransfertList;

TransfertList.defaultProps = {
  players: [],
};

TransfertList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
};
