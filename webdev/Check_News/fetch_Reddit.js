const clientId = 'yDPA3X_8cvKcm0SU_cIkZvA';
const clientSecret = '-c-AYiw1eiPH8kZJacIpbybR6Nb5_A';
const authString = btoa(`${clientId}:${clientSecret}`);

fetch('https://www.reddit.com/api/v1/access_token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${authString}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
})
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    fetch('https://www.reddit.com/r/all/top.json?t=day', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const subredditCounts = {};
        // Extract the subreddit names and count their occurrences
        data.data.children.forEach(post => {
          const subreddit = post.data.subreddit;
          if (subreddit in subredditCounts) {
            subredditCounts[subreddit]++;
          } else {
            subredditCounts[subreddit] = 1;
          }
        });
        // Sort the subreddit names by their count in descending order
        const popularSubreddits = Object.keys(subredditCounts).sort((a, b) => {
          return subredditCounts[b] - subredditCounts[a];
        });
        console.log(popularSubreddits);
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
