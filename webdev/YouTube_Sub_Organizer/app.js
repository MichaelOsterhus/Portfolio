// Replace with your client ID and client secret
const CLIENT_ID = '154186871279-jrbfikn5lcf2q209fj0v845hvi00esoj.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

// Initialize the Google APIs client
gapi.load('client:auth2', () => {
  gapi.client.init({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scope: 'https://www.googleapis.com/auth/youtube',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  }).then(() => {
    // Client is initialized and ready for use
    return gapi.auth2.getAuthInstance().signIn();
  }).then(function() {
    // Get the access token
    var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
   
    // Use the access token in your API request
    gapi.client.youtube.subscriptions.list({
      part: 'snippet',
      mine: true,
      maxResults: 50,
      access_token: accessToken // Include the access token in the request
    }).then((response) => {
      console.log('Subscriptions:', response.result);
    }).catch((error) => {
      console.error('Error retrieving subscriptions:', error);
    });
  })
  .catch((error) => {
    console.error('Error obtaining access token:', error);
  })
  .catch((error) => {
    console.error('Error initializing client:', error);
  });
});



// Example: Get a list of subscriptions for the authenticated user
gapi.client.youtube.subscriptions.list({
  part: 'snippet',
  mine: true,
  maxResults: 50,
  access_token: accessToken // Include the access token in the request
}).then((response) => {
  console.log('Subscriptions:', response.result);
}).catch((error) => {
  console.error('Error retrieving subscriptions:', error);
});


  
