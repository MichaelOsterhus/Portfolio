
// var apiKey = 'AIzaSyDEAaAg51L7NHNpwQ4jVIwXlnCERuNsiOU'
// var blogId = '4366616470796725508'
// var Thrimskvida = '6208382948984439349'

// function getBloggerData(postId) {
//   var apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts/' + postId + '?key=' + apiKey + '&fields=title,selfLink,images&fetchImages=true';
  
//   $.getJSON(apiUrl, function(data) {
//     $('#post-title').text(data.title);
//     $('#post-image').attr('src', data.images[0].url);
//     $('#post-link').attr('href', data.selfLink);
//   }).fail(function(jqXHR, textStatus, errorThrown) {
//     console.log(jqXHR);
//     console.log(textStatus);
//     console.log(errorThrown);
// });
// }


// getBloggerData(Thrimskvida);



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

    blogs.push(data.items[0])
    console.log(data);
    for (i = 0; i < blogs.length; i++){
      console.log(blogs[i].title);
    }
    
  })
  .catch(error => {
    console.error(error);
  });



// fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId2}/posts?fields=items(title,url,selfLink,content/images)&key=${apiKey2}`)
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
//       const imageUrl = post.content.images[0].url;
//       const postUrl = post.selfLink;
//       console.log(title, imageUrl, postUrl);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//     console.log(error.response);
//   });

  console.log('Your code works here.')

  // fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId2}/posts?fields=items(title,url)&key=${apiKey2}`)
  // .then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   throw new Error('Request failed');
  // })
  // .then(data => {
  //   const posts = data.items;
  //   posts.forEach(post => {
  //     const title = post.title;
  //     // const imageUrl = post.content.images[0].url;
  //     const postUrl = post.url;
  //     console.log(title, postUrl);
  //   });
  // })
  // .catch(error => {
  //   console.error(error);
  //   console.log(error.response);
  // });




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


  