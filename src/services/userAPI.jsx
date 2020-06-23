import Cookies from 'js-cookie'
import {pluralyzeType} from 'helpers/misc.jsx'

function profile(id, type) {

  type = pluralyzeType(type)

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }
  
  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}/${id}.json`
  let url = baseURL + endUrl

  fetch(url, request)
    .then(response => response.json())
    .then(response => {return response})
}

export { profile }
