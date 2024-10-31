
const apiKey = 'c4f6b12d51444588ad218a591da96f28';



// Function to fetch top AI articles
async function fetchTopAIArticles() {
  try {
    // Define the API endpoint and parameters
    const url = `https://newsapi.org/v2/everything?q=AI OR automation&apiKey=${apiKey}`;


    // Fetch the data from the NewsAPI
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Check if articles are present
    if (data.articles && data.articles.length > 0) {
      // Extract article titles and their sources
      const articles = data.articles.map(article => ({
        title: article.title,
        source: article.source.name,
        url: article.url
      }));

      // Sort articles by their titles (optional)
      articles.sort((a, b) => a.title.localeCompare(b.title));

      // Get the newsAPI div
      const newsApiDiv = document.getElementById('newsAPI');

      // Clear any existing content in the div
      newsApiDiv.innerHTML = '';

      // Append each article to the newsAPI div
      articles.forEach(article => {
        // Create a new div for the article
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article')
        // Create an anchor element
        const articleLink = document.createElement('a');
        articleLink.href = article.url;  // Set the href to the article URL
        articleLink.target = '_blank';    // Open link in new tab
        

        // Append the link to the article div
        

        // Optionally, you can add more details, like the source
        const sourceInfo = document.createElement('p');
        sourceInfo.innerText = `Source: ${article.source}`;

        const articleTitle = document.createElement('h2')
        articleTitle.innerText = article.title
        articleDiv.appendChild(articleTitle)
        articleDiv.appendChild(sourceInfo);
        articleLink.appendChild(articleDiv);

        // Append the article div to the newsAPI div
        newsApiDiv.appendChild(articleLink);
      });
    } else {
      console.log("No articles found.");
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

// Call the function to fetch articles
fetchTopAIArticles();
