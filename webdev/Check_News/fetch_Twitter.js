async function fetchTrends() {
  const url = 'https://twitter154.p.rapidapi.com/trends/?woeid=1';
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'ad12501795msh94fb8a65f6f36dfp1762bcjsna4329de75ba1',
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchTrends();
