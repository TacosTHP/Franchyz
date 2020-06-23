import Cookies from 'js-cookie';
import {pluralyzeType} from 'helpers/misc.jsx';

function profile(id, type) {

	type = pluralyzeType(type);

	let headers = {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token')
	};

	let request = {
		method: 'get',
		headers: headers,
	};

	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/${type}/${id}.json`;
	let url = baseURL + endUrl;

	return fetch(url, request)
		.then(response => response.json())
		.then(response => {return response})
	};

function profileUpdate({ id, type, first_name }) {
	let data;
	if (type === 'player') {
		data = {
      first_name: first_name,
    };
  } else {
  	data = {
  		first_name: first_name,
  	};
  };

	type = pluralyzeType(type);

	let headers = {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token'),
		// 'Access-Control-Allow-Methods': '*'
	};

	let request = {
		method: 'PUT',
		headers: headers,
		body: JSON.stringify(data)
	};

	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/${type}/${id}.json`;
	let url = baseURL + endUrl;

	console.log(url)
	console.log(request)

	return fetch(url, request)
		.then(response => response.json())
		.then(response => {return response})
	};

export { profile, profileUpdate };
