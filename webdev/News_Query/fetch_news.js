let perigonAPI;
let newsAPI;
const newsfeed = document.getElementById('newsfeed');



fetch('/secrets/keys.json')
  .then(response => response.json())
  .then(key => {
    perigonAPI = key.perigon_API;
    newsAPI = key.news_API;
    const urls = [
      {
        name: "AI Around The World",
        source: "GDELT",
        url: `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json`
      },
      {
        name: "Financial Impact of AI--Forbes",
        source: "GDELT",
        url: `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence%20sourcecountry:US%20sourcelang:English%20near5:%22financial%20impact%22%20domainis:forbes.com&format=json`
      },
      {
        name: "Top Technology Headlines",
        source: "News API",
        url: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${newsAPI}`
      },
      {
        name: "Top Headlines--TechCrunch",
        source: "News API",
        url: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${newsAPI}`
      },
      {
        name: "Startups From Last Month",
        source: "Perigon",
        url: `https://api.goperigon.com/v1/all?topic=Startups&sourceGroup=top100&language=en&from=2023-04-16&apiKey=${perigonAPI}`
      }
    ];
    const createArticleElement = (story, img, lang, source) => {
      const link = document.createElement('a');
      const title = story.title;
      link.setAttribute('href', story.url);
      link.setAttribute('target', '_blank');
      link.innerHTML = `<div class="newspost">
        <img src="${img}"><div class="post-title"><h3>${title}</h3></div>
        <span class="lang">${lang}</span><span class="source">${source}</span></div>`;
      newsfeed.appendChild(link);
    };
    
    const GDELT_articles = (story) => {
      const img = story.socialimage;
      const lang = story.language;
      const source = story.domain;
      createArticleElement(story, img, lang, source);
    };
    
    const NewsAPI_articles = (story) => {
      const img = story.urlToImage;
      const lang = "English";
      const source = story.source.name;
      createArticleElement(story, img, lang, source);
    };
    
    const Perigon_articles = (story) => {
      const img = story.imageUrl;
      const lang = "English";
      const source = story.source.domain;
      createArticleElement(story, img, lang, source);
    };
    const sourceToFunctionMap = {
      GDELT: GDELT_articles,
      "News API": NewsAPI_articles,
      Perigon: Perigon_articles
    };
    
    
    urls.forEach((URL) => {
      fetch(URL.url)
        .then(response => response.json())
        .then(data => {
          console.log(`This is "${URL.name}" from ${URL.source}`)
          console.log(data);
          const header = document.createElement('h1')
          header.textContent = URL.name
          newsfeed.appendChild(header)
          if (sourceToFunctionMap.hasOwnProperty(URL.source)) {
            data.articles.forEach(story => sourceToFunctionMap[URL.source](story));
          }
          
        })
        .catch(error => console.error(error));
    });
    
    console.log(newsAPI, perigonAPI);
  });

const sourcecountry = 'United States'; // Specify the source country (e.g. USA for Reuters)
const language = 'English'; // Specify the language (e.g. EN for English)
const num = 6; // Maximum number of articles to fetch




// JavaScript
const searchBtn = document.getElementById('searchBtn');

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
//  const trans = (story) => { 
//   const link = document.createElement('a');
//   const title = story.title;
//   const lang = story.language;
//   // const img = await cropImage(story.socialimage);
//   const img = story.socialimage
//   const source = story.domain

  
//   link.setAttribute('href', story.url);
//   link.innerHTML = `<div class="newspost">
//   <img src="${img}"><div class="post-title"><h3>${title}</h3></div><span class="lang">${lang}</span><span class="source">${source}</span></div>`;
//   newsfeed.appendChild(link);
// };

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     data.articles.forEach((story) => trans(story))
//     console.log(data)
//   })
//   .catch(error => console.error(error));






