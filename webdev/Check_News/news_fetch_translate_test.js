const url = 'https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json';

const newsfeed = document.getElementById('newsfeed');

const trans = (story) => {
  const div = document.createElement('div');

  // Translate the title
  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(story.title)}&langpair=${story.language}|en`)
    .then(response => response.json())
    .then(data => {
      const subheading = document.createElement('h2');
      subheading.innerText = data.responseData.translatedText;
      div.appendChild(subheading);
    })
    .catch(error => console.error(error));

  // Create a link element for the original title
  const link = document.createElement('a');
  link.setAttribute('href', story.url);
  link.innerHTML = `<h1>${story.title}</h1>`;
  div.appendChild(link);

  // Translate the description
  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(story.summary)}&langpair=${story.language}|en`)
    .then(response => response.json())
    .then(data => {
      const paragraph = document.createElement('p');
      paragraph.innerText = data.responseData.translatedText;
      div.appendChild(paragraph);
    })
    .catch(error => console.error(error));

  newsfeed.appendChild(div);
};

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((story) => trans(story));
    console.log(data);
  })
  .catch(error => console.error(error));

