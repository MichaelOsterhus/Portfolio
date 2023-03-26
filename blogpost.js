
var apiKey = 'AIzaSyBgbqYoW1taQx5bY59XETPF48N1SzyWxSE'
var blogId = 'trannyinacan'

function getBloggerData(postId) {
  var apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts/' + postId + '?key=' + apiKey + '&fields=title,selfLink,images&fetchImages=true';
  
  $.getJSON(apiUrl, function(data) {
    $('#post-title').text(data.title);
    $('#post-image').attr('src', data.images[0].url);
  });.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
});
}


getBloggerData('a-sign-on-my-journey-to-gender-deviance');

