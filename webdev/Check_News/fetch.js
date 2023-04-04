const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json`;


fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
