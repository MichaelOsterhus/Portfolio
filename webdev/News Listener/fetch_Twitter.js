async function fetchTrends() {
  // const url = 'https://twitter154.p.rapidapi.com/trends/?woeid=23424977';
  const url = 'https://api.twitter.com/1.1/search/tweets.json?q=JavaScript'
  
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
    console.log(result)
    // const trends = JSON.parse(result)
    // const trendObj = trends[0].trends
    // console.log(JSON.stringify(trendObj[0]))
    // const twitTrends = document.getElementById("TwitTrends")
    // trendObj.forEach(trend => {
    //   const twitLink = document.createElement('a')
    //   const twitDiv = document.createElement('div')
    //   const twitTit = document.createElement('p')
    //   twitLink.href = trend.url
    //   twitTit.textContent = trend.name
    //   twitDiv.appendChild(twitTit)
    //   twitLink.appendChild(twitDiv)
    //   twitTrends.appendChild(twitLink)

    // })
    // trend keys = "name","url,"promoted_content","query","tweet_volume"}
    // const trendNames = trends[0].trends.map(trend => trend.name);
    // console.log(trendNames);
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchTrends();

// https://api.twitter.com/1.1/trends/place.json?lang=en
// const trends = JSON.parse(result);
// const trendNames = trends[0].trends.map(trend => trend.name);
// console.log(trendNames);