// const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json`;
const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json&_=${Date.now()}`;




// JavaScript
const searchBtn = document.getElementById('searchBtn');
const newsfeed = document.getElementById('newsfeed');

searchBtn.addEventListener('click', () => {
  const query = document.getElementById('news').value;
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=artlist&timespan=1M&format=json`;

  // Clear existing newsfeed content
  newsfeed.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.articles.forEach(story => {
        const link = document.createElement('a');
        const title = story.title;
        const lang = story.language;
        const img = story.socialimage;

        link.setAttribute('href', story.url);
        link.innerHTML = `<div class="newspost"><h3>${title}</h3>
          <div style="background-image: url(${img}); background-size: cover;
          background-repeat: no-repeat;
          background-position: center center; background-color: #444; width: 300px; height: 200px;"><h2>${lang}</h2></div></div>`;
        newsfeed.appendChild(link);
      });
      console.log(data);
    })
    .catch(error => console.error(error));
});


// const trans = async (story) => {
 const trans = (story) => { 
  const link = document.createElement('a');
  const title = story.title;
  const lang = story.language;
  // const img = await cropImage(story.socialimage);
  const img = story.socialimage

  
  link.setAttribute('href', story.url);
  link.innerHTML = `<div class="newspost"><h3>${title}</h3>
  <div style="background-image: url(${img}); background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; background-color: #444; width: 300px; height: 200px;"><h2>${lang}</h2></div></div>`;
  newsfeed.appendChild(link);
};

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((story) => trans(story))
    console.log(data)})
  .catch(error => console.error(error));



  //Code below is pasted from Chat

// const cropImage = async (imgUrl) => {
//   const crop = await smartcrop.crop(imgUrl, {width: 300, height: 200});
//   const canvas = document.createElement('canvas');
//   canvas.width = 300;
//   canvas.height = 200;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(imgUrl, crop.topCrop.x, crop.topCrop.y, crop.topCrop.width, crop.topCrop.height, 0, 0, 300, 200);
//   return canvas.toDataURL();
// };



// Example usage
// const story = {
//   title: "Lorem Ipsum",
//   language: "English",
//   socialimage: "https://example.com/image.jpg",
//   url: "https://example.com"
// };

// trans(story);


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


