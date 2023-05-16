
const urls = {
                GDELT_AI_url : "https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json",
                GDELT_NYTimes_url : "https://api.gdeltproject.org/api/v2/doc/doc?query=%22Trump%22%20sourcecountry:US%20sourcelang:English%20near5:%22wall%20border%22%20domainis:nytimes.com&format=json",
                NewsAPI_WSJ_url: "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4f6b12d51444588ad218a591da96f28",
                NewsAPI_TechCrunch_url : "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c4f6b12d51444588ad218a591da96f28",
                Perigon_url : "api.goperigon.com/v1/all?q=SpaceX OR Tesla&language=en&from=2023-05-08&apiKey=[KEY]"
              }

let perigonAPI 
let newsAPI 

fetch('/secrets/keys.json')
  .then(response => response.json())
  .then(key => {
    // Access your secrets here
    perigonAPI = key.perigon_API
    newsAPI = key.news_API 
  });

const sourcecountry = 'United States'; // Specify the source country (e.g. USA for Reuters)
const language = 'English'; // Specify the language (e.g. EN for English)
const num = 6; // Maximum number of articles to fetch


fetch(urls.GDELT_AI_url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error));


// JavaScript
const searchBtn = document.getElementById('searchBtn');
const newsfeed = document.getElementById('newsfeed');
let country
let domain
const filtersForm = document.querySelector('#filters form');
filtersForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    country = document.querySelector('#country').value;
    domain = document.querySelector('#domain').value;
    // Pass country and domain values to GDELT query
    // ...
});


//code for search function
searchBtn.addEventListener('click', () => {
  const query = document.getElementById('news').value;
  const gdeltBaseUrl = 'https://api.gdeltproject.org/api/v2/doc/doc';
  // const queryURL = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=artlist&timespan=1M&format=json`;
  const queryURL = `${gdeltBaseUrl}?query=${query}&mode=artlist&format=json&sort=datedesc&${country ? `sourcecountry:${country}&` : ''}${domain ? `domainis:${domain}&` : ''}`;

  console.log(queryURL)
  // Clear existing newsfeed content
  newsfeed.innerHTML = '';

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      data.articles.forEach(story => {
        const link = document.createElement('a');
        const title = story.title;
        const lang = story.language;
        const img = story.socialimage;

        link.setAttribute('href', story.url);
        link.innerHTML = `<div class="newspost"><h3>${title}</h3>
        <div style="width: 80px; height: 60px; background-image: url(${img}); background-size: cover;
        background-repeat: no-repeat; "></div><h3>${title}</h3><span>${lang}</span></div>`;
        newsfeed.appendChild(link);
      });
      
    })
    .catch(error => console.error(error));
});

//code for intial news fetch
// const trans = async (story) => {
 const trans = (story) => { 
  const link = document.createElement('a');
  const title = story.title;
  const lang = story.language;
  // const img = await cropImage(story.socialimage);
  const img = story.socialimage
  const source = story.domain

  
  link.setAttribute('href', story.url);
  link.innerHTML = `<div class="newspost">
  <img src="${img}"><div class="post-title"><h3>${title}</h3></div><span class="lang">${lang}</span><span class="source">${source}</span></div>`;
  newsfeed.appendChild(link);
};

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     data.articles.forEach((story) => trans(story))
//     console.log(data)
//   })
//   .catch(error => console.error(error));






