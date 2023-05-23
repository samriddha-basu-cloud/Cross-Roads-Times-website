function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
}


// Function to make API call
// Function to make API call
function getNews() {
  var apiUrl = 'https://api.newscatcherapi.com/v2/search?q=%22Startup%22&lang=en&countries=IN&page_size=4';
  var apiKey = 'uKTXrweWckpxGrUcuuFFsKzX2saabcd7braQkCZkN6Q';

  // Create the headers object
  var headers = new Headers();
  headers.append('X-API-KEY', apiKey);

  // Make the API call using fetch
  fetch(apiUrl, { headers: headers })
      .then(function(response) {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Error: ' + response.status);
      })
      .then(function(data) {
          displayNews(data.articles);
      })
      .catch(function(error) {
          console.log(error);
      });
}

// Function to display news
// Function to display news
// function displayNews(articles) {
//   var newsContainer = document.getElementById('news-container');

//   // Clear any existing content in the news container
//   newsContainer.innerHTML = '';

//   // Loop through each article
//   articles.forEach(function(article) {
//       // Create a news item element
//       var newsItem = document.createElement('div');
//       newsItem.classList.add('news-item');

//       // Create title element
//       var titleElement = document.createElement('h3');
//       titleElement.innerText = article.title;
//       newsItem.appendChild(titleElement);

//       // Create image element
//       var imageElement = document.createElement('img');
//       imageElement.src = article.media;
//       imageElement.alt = article.title;
//       newsItem.appendChild(imageElement);

//       // Create content element
//     //   var contentElement = document.createElement('p');
//     //   contentElement.innerText = article.summary;
//     //   newsItem.appendChild(contentElement);

//       // Append the news item to the news container
//       newsContainer.appendChild(newsItem);
//   });
// }


// Function to display news
function displayNews(articles) {
    var newsContainer = document.getElementById('news-container');

    // Clear any existing content in the news container
    newsContainer.innerHTML = '';

    // Create a list element
    var listElement = document.createElement('ul');
    listElement.classList.add('news-list');

    // Loop through each article
    articles.forEach(function(article) {
        // Create a list item element
        var listItem = document.createElement('li');

         // Create image element
         var imageElement = document.createElement('img');
         imageElement.src = article.media;
         imageElement.alt = article.title;
         listItem.appendChild(imageElement);

         //Create time element
        var publishedDate = document.createElement('time');
        var formattedDate = formatDate(article.published_date);
        publishedDate.innerText = formattedDate; 
        listItem.appendChild(publishedDate);

        // Create title element
        var titleElement = document.createElement('h3');
        titleElement.innerText = article.title;
        listItem.appendChild(titleElement);

        

       

        // // Create content element
        // var contentElement = document.createElement('p');
        // contentElement.innerText = article.summary;
        // listItem.appendChild(contentElement);

        // Append the list item to the list
        listElement.appendChild(listItem);
    });

    // Append the list to the news container
    newsContainer.appendChild(listElement);
}


// Call the getNews function to fetch and display news
getNews();



