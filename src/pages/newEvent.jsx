import React, { useState, useEffect } from "react";
import FormGame from "components/formGame.jsx";
import { Select } from "antd";
import FormPractice from "components/formPractice";
import { useSelector } from 'react-redux';
import * as teamAPI from 'services/teamAPI'
import TransfertList from 'components/transfertList.jsx'

function CreateEvents() {

  const clubId = useSelector(state => state.userReducer.clubId);
  const [eventType, setEventType] = useState("");
  const [teams, setTeams] = useState('')
  const [players, setPlayers] = useState('')
  const [validateKeys, setValidateKeys] = useState()

  const { Option } = Select;

  useEffect(() => { setupTeams() }, [])

  async function setupTeams(){
    const ans = await teamAPI.getTeamsOfClub(clubId)
    setTeams(ans)
    if (ans.length > 0) {
      setPlayers(<TransfertList players={ans[1].players} setValidateKeys={setValidateKeys} />)
    }
  }

  function onChange(value) {
    setEventType(value);
  }

  return (
    <div>
      <br />
      <br />
      <hr className="my-4" style={{ width: "600px" }}></hr>
      <div className="bg-dark pb-3 p-2 mx-auto rounded select" style={{ width: "35%" }} >

        <h3 className="text-light text-center">Please choose the event type?</h3>
        <div className="text-center">
          <Select className="text-center" showSearch style={{ width: 300 }} placeholder="Choose event type" optionFilterProp="children" onChange={onChange} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 } >
            <Option value="game">Competition</Option>
            <Option value="practice">Training session</Option>
          </Select>
        </div>
      </div>
      <hr className="my-4" style={{ width: "600px" }}></hr>
      {players}

      {eventType === "game" ? (
        <FormGame style={{ marginTop: "25px" }} eventType={eventType} playersIds={validateKeys} />
      ) : (
        <FormPractice style={{ marginTop: "25px" }} eventType={eventType} playersIds={validateKeys}/>
      )}
    </div>
  );
}

export default CreateEvents;
