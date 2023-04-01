// var Thrimskvida = '6208382948984439349'
const blogId = '4366616470796725508'
const apiKey = 'AIzaSyDEAaAg51L7NHNpwQ4jVIwXlnCERuNsiOU'
let blogs = []
const cropOptions = {width: 600, height: 371};

fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`)
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
      const cropImg = new Image();
      cropImg.onload = function() {
        const cropResult = smartcrop.crop(cropImg, cropOptions);
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = cropOptions.width;
        cropCanvas.height = cropOptions.height;
        const cropCtx = cropCanvas.getContext('2d');
        cropCtx.drawImage(cropImg, cropResult.topCrop.x, cropResult.topCrop.y, cropResult.topCrop.width, cropResult.topCrop.height, 0, 0, cropOptions.width, cropOptions.height);
        const cropUrl = cropCanvas.toDataURL();
        document.getElementById(`img-${item.id}`).src = cropUrl;
      };
      cropImg.src = imgSRC;
    }
    
    console.log(`>>>>>The length of blogs array is ${blogs.length}`)
  })
  .catch(error => {
    console.error(error);
  });



function handleResponse(response) {
  const parser = new DOMParser();
  const cropOptions = {width: 600, height: 371};
  response.items.forEach(item => {
    const html = parser.parseFromString(item.content, 'text/html');
    const img = html.querySelector('img');
    const url = img ? img.src : '';
    const title = item.title;
    const link = item.url;
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `<h2><a href="${link}">${title}</a></h2><a href="${link}"><img src="${url}" id="img-${item.id}"></a><p>${item.content}</p>`;
    document.getElementById('content').appendChild(post);
    const cropImg = new Image();
    cropImg.onload = function() {
      const cropResult = smartcrop.crop(cropImg, cropOptions);
      const cropCanvas = document.createElement('canvas');
      cropCanvas.width = cropOptions.width;
      cropCanvas.height = cropOptions.height;
      const cropCtx = cropCanvas.getContext('2d');
      cropCtx.drawImage(cropImg, cropResult.topCrop.x, cropResult.topCrop.y, cropResult.topCrop.width, cropResult.topCrop.height, 0, 0, cropOptions.width, cropOptions.height);
      const cropUrl = cropCanvas.toDataURL();
      document.getElementById(`img-${item.id}`).src = cropUrl;
    };
    cropImg.src = url;
  })
}



  