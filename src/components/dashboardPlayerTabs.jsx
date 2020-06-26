import React from "react";
import TeamList from "./teamList.jsx";
import {Link} from "react-router-dom";
import {Tabs} from "antd";
import ClubInformations from "./clubInformations.jsx";

function DashboardPlayerTabs({club}) {

	const {TabPane} = Tabs;

	return (
		<div className="container rounded mt-5 mb-5" style={{backgroundColor: "#E8E7E7"}}>
			<div className="card-container pt-3">
				<Tabs type="card">
					<TabPane tab="Your Club" key="1">
						<ClubInformations club={club} />
					</TabPane>
					<TabPane tab="Your team" key="2">
						<TeamList teams={club.teams} />
						<Link to="/newTeam">
						</Link>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

export default DashboardPlayerTabs;