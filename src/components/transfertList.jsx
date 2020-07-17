import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Space, Transfer, Switch } from 'antd';

const TransfertList = ({ players, setValidateKeys }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [targetKeys, setTargetKeys] = useState([]);
  const [data, setData] = useState([]);

  const updateData = (nextTargetKeys) => {
    const playersData = data.filter(
      (el) => nextTargetKeys.includes(el.key) || players.some((player) => player.id === el.key),
    );
    setData(playersData);
  };

  const handleChange = (nextTargetKeys, direction) => {
    setTargetKeys(nextTargetKeys);
    setValidateKeys(nextTargetKeys);
    if (direction === 'left') {
      updateData(nextTargetKeys);
    }
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const handleDisable = (disable) => {
    setDisabled(disable);
  };

  useEffect(() => {
    const selectedPlayersData = data.filter((player) => targetKeys.includes(player.key));
    const playersData = players.map((player) => ({ key: player.id, title: player.first_name }))
      .concat(selectedPlayersData);
    setData(playersData);
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
  setValidateKeys: PropTypes.func.isRequired,
};
