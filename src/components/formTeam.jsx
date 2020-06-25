import React, { useState } from "react";
import "../styles/app.scss";
import * as teamAPI from "services/teamAPI";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { message} from 'antd';

const FormTeam = () => {
  const creatorId = useSelector((state) => state.userReducer.id);
  const clubId = useSelector((state) => state.userReducer.clubId);
  const coachId = useSelector((state) => state.userReducer.id);

  const [teamName, setTeamName] = useState("");

  let history = useHistory();

  const onSubmit = async () => {
    if (teamName === "") {
      document.getElementById("notice_teamname").innerHTML =
        "Please fill in a team name";
    }

    let response = await teamAPI.createTeam(teamName, creatorId, coachId, clubId)

    if (response.errors === undefined) {
      history.push("/dashboardAdmin");
      message.success('You added a new team', 2.5)
    }

  }

  return (
    <div>
      {alert}
      <div className="text-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className=" form-group col-4 text-center pb-3 p-2 mx-auto">
              <label style={{ marginLeft: "10px", color: "grey" }}>
                Team name:
              </label>
              <input type="text" className="form-control" placeholder="Name" id="title" onChange={(e) => setTeamName(e.target.value)} value={teamName} />
              <p id="notice_teamname" className="redtext"></p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-danger" style={{ marginTop: "25px", marginBottom: "25px" }} onClick={onSubmit} >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormTeam;
