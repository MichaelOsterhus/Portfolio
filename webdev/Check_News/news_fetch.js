const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json`;

const newsfeed = document.getElementById('newsfeed')
const trans = (story) => {
  const link = document.createElement('a')
  const title = story.title
  link.url = story.url
  link.innerHTML = `<h1>${title}</h1>`
  newsfeed.appendChild(story)
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach((story) => trans(story))
    console.log(data)})
  .catch(error => console.error(error));
