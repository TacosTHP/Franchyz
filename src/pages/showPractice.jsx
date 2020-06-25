import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import * as practiceAPI from 'services/practiceAPI.jsx'
import moment from 'moment'
import "../styles/app.scss";
import "../styles/showPractice.scss";
import localization from 'moment/locale/fr';

function PracticeShow() {
	let {practice_id} = useParams();
	const [practice, setPractice] = useState("");

	useEffect(() => {  
		practiceAPI.getPractice(practice_id)
		.then((response) => setPractice(response));
		},[] )

	moment.updateLocale('fr', localization);

	return <>
	{practice.status === 404 ? 
	<h3 className="text-center redtext mt-5">Ths practice does not exist.</h3> : 
	<div className="card mx-auto">
			<div className="card-header">
				<div className="text-uppercase">
					{practice.title}
				</div> 
			</div>
						<div className="card-body">
							<h6>Location</h6>
								<p> {practice.address}</p>
								<p> {practice.city}</p>
								<p> {practice.zip_code} {practice.country}</p>
								<h6> Date and Time </h6>
								<p> {moment(practice.starting_date_time).format("LLLL")}</p>
								<h6> Duration in min: </h6>
								<p>{practice.duration}</p>
								{practice.canceled !== "false" ? 
								"" : 
								<h6 className="redtext">The event is canceled.</h6>}
						</div>
		</div>}
	</>;
}

export default PracticeShow;
