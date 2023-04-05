


const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json`;

const newsfeed = document.getElementById('newsfeed')
const trans = (story) => {
  const link = document.createElement('a')
  const title = story.title
  link.setAttribute('href', story.url)
  link.innerHTML = `<h1>${title}</h1>`
  newsfeed.appendChild(link)
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((story) => trans(story))
    console.log(data)})
  .catch(error => console.error(error));

// const newsfeed = document.getElementById('newsfeed');

// const trans = (story) => {
//   // Create a new div element to hold the link and subheading
//   const div = document.createElement('div');

//   // Translate the title and add it as a subheading
//   translate(story.title, { to: 'en' }).then(res => {
//     const subheading = document.createElement('h2');
//     subheading.innerText = res.text;
//     div.appendChild(subheading);
//   }).catch(err => {
//     console.error(err);
//   });

//   // Create a link element for the original title
//   const link = document.createElement('a');
//   link.setAttribute('href', story.url);
//   link.innerHTML = `<h1>${story.title}</h1>`;
//   div.appendChild(link);

//   // Translate the description and add it as a paragraph
//   translate(story.description, { to: 'en' }).then(res => {
//     const paragraph = document.createElement('p');
//     paragraph.innerText = res.text;
//     div.appendChild(paragraph);
//   }).catch(err => {
//     console.error(err);
//   });

//   // Add the div to the newsfeed
//   newsfeed.appendChild(div);
// }

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     data.articles.forEach((story) => trans(story));
//     console.log(data);
//   })
//   .catch(error => console.error(error));


