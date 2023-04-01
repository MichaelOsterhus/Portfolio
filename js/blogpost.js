
// var apiKey = 'AIzaSyDEAaAg51L7NHNpwQ4jVIwXlnCERuNsiOU'
// var blogId = '4366616470796725508'
// var Thrimskvida = '6208382948984439349'




const blogId2 = '4366616470796725508'
const apiKey2 = 'AIzaSyDEAaAg51L7NHNpwQ4jVIwXlnCERuNsiOU'
let blogs = []

fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId2}/posts?key=${apiKey2}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  })
  .then(data => {
    for (i = 0; i < data.items.length; i++){
      blogs.push(data.items[i])
    }
    console.log(`>>>>>The length of data.items is ${data.items.length}`)
    for (i = 0; i < blogs.length; i++){
      console.log(blogs[i].title)
      // var blogURL = blogs[i].url
      var htmlContent = blogs[i].content
      var $html = $(htmlContent)
      var $images = $html.find('img')
      var imgSRC = $images[0].src
      var blogPosts = document.getElementById('blogs')
      var post = document.createElement('a')
      post.href = blogs[i].url
      post.target = '_blank'
      post.innerHTML = `<div class="post"><h2>${blogs[i].title}</h2><img src="${imgSRC}"></div>`
      blogPosts.appendChild(post)
    }
    
    console.log(`>>>>>The length of blogs array is ${blogs.length}`)
  })
  .catch(error => {
    console.error(error);
  });





  console.log('Your code works here.')

 




// fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId2}/posts?fields=items(title,url,content(images))&key=${apiKey2}`)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Request failed');
//   })
//   .then(data => {
//     const posts = data.items;
//     posts.forEach(post => {
//       const title = post.title;
//       const postUrl = post.url;
//       const image = post.content.images[0].url; // assuming there is only one image per post
//       console.log(title, postUrl, image);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });


  