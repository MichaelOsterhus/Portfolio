
function getBloggerData(blogId, postId) {
  var apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts/' + postId + '?key=' + apiKey + '&fields=title,selfLink,images&fetchImages=true';
  
  $.getJSON(apiUrl, function(data) {
    $('#post-title').text(data.title);
    $('#post-image').attr('src', data.images[0].url);
  });
}


getBloggerData('trannyinacan', 'a-sign-on-my-journey-to-gender-deviance');

