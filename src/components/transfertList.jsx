import React, { useState } from 'react'
import { Space, Transfer, Switch } from 'antd';


function TransfertList({players, setValidateKeys}) {



  const [selectedKeys, setSelectedKeys] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [targetKeys, setTargetKeys] = useState([])
  const [data, setData] = useState(
    players.map(el => {
      let obj = {}
      obj['key'] = el.id.toString()
      obj['title'] = el.first_name
      return obj })
  )

  function handleChange(nextTargetKeys, direction, moveKeys) {
    setTargetKeys(nextTargetKeys)
    setValidateKeys(nextTargetKeys)

    console.log('targetKeys: ', nextTargetKeys);
    console.log('validate: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  function handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
    console.log('selec: ', selectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targ: ', targetKeys);
    console.log('selec: ', selectedKeys);
  };

  function handleScroll(direction, e) {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  function handleDisable(disabled) {
    setDisabled({ disabled })
  };

  return (
    <div>
      <Transfer dataSource={data} titles={['Source', 'Target']} targetKeys={targetKeys} selectedKeys={selectedKeys} onChange={handleChange} onSelectChange={handleSelectChange} onScroll={handleScroll} render={item => item.title} disabled={disabled} />

      <Space style={{ marginTop: 16 }}>
        <Switch unCheckedChildren="disabled" checkedChildren="disabled" checked={disabled} onChange={handleDisable} />
      </Space>
    </div>
  );
}

export default TransfertList
