// URL of the RSS feed
// URL of the RSS feed
const rssUrl = [
    'https://www.reutersagency.com/feed/?best-topics=tech&post_type=best',
    'https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best'
  ];
  
  // Fetch the RSS feeds using the fetch API
  rssUrl.forEach(url => {
    fetch(url)
      .then(response => response.text())
      .then(xmlText => {
        // Parse the XML and get the feed items
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
  
        // Display the feed items
        items.forEach(item => {
          const title = item.querySelector('title').textContent;
          const link = item.querySelector('link').textContent;
          const description = item.querySelector('description').textContent;
          const newsfeed = document.getElementById('newsfeed');
          const a = document.createElement('a');
          a.href = link;
          a.innerHTML = `<h2>${title}</h2>
            <p>${description}</p>`;
          newsfeed.appendChild(a); 
        });
      })
      .catch(error => console.error(error));
  });
  