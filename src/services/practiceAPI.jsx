function createPractice(clubId, teamId, eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration) {

  const data = {
    title: eventTitle,
    long_description: eventDescription,
    address: address,
    city: city,
    country: country,
    zip_code: zipCode,
    starting_date_time: dateTime,
    duration: duration,
    canceled: false,
  };

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}/practices.json`;
  let url = baseURL + endUrl;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then( response => response.json())
    .then((response) => { 
      console.log(response)
      return response 
    });
}

export { createPractice }
