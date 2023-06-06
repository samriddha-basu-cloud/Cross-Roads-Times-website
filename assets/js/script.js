
// console.log("CROSSROAD TIMES");    

// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear().toString().slice(-2);
//   return `${day}/${month}/${year}`;
// }

// const apiKey = '8S8AfkHJAyvj5syhmlncjYdv1rfdTb6UprAAg0hiBs'; // Replace with your Newscatcher API key

// const fetchNews = async () => {
//   const url = `https://api.newscatcherapi.com/v2/search?q=%22Startup%22&lang=en&countries=IN&page_size=4`;
  
//   try {
//     const response = await fetch(url, {
//       headers: {
//         'X-Api-Key': apiKey,
//       },
//     });

//     const data = await response.json();
    
//     // Check if the response is successful
//     if (response.ok) {
//       const news = data.articles.slice(0, 4); // Get the first 4 news articles
      
//       // Iterate through the news articles
//       for (let i = 0; i < news.length; i++) {
//         const article = news[i];
//         const { title, image, published_date } = article;

//         console.log('Title:', title);
//         console.log('Image:', image);
//         console.log('Published Date:', published_date);
//         console.log('---');
//       }
//     } else {
//       console.log('Error:', data.message); // Handle API error
//     }
//   } catch (error) {
//     console.log('Error:', error.message); // Handle fetch error
//   }
// };

// fetchNews();


// // async function fetchNews() {
// //   const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
// //   const articles = await response.json();

// //   return articles;
// // }

// // // Function to display news
// // function displayNews(articles) {
// //   var newsContainer = document.getElementById('news-container');

// //   // Clear any existing content in the news container
// //   newsContainer.innerHTML = '';

// //   // Create a list element
// //   var listElement = document.createElement('ul');
// //   listElement.classList.add('news-list');

// //   // Loop through each article
// //   articles.forEach(function(article) {
// //       // Create a list item element
// //       var listItem = document.createElement('li');

// //       // Create title element
// //       var titleElement = document.createElement('h2');
// //       titleElement.innerText = article.title;
// //       listItem.appendChild(titleElement);

// //       // Create image element
// //       var imageElement = document.createElement('img');
// //       imageElement.src = article.media;
// //       imageElement.alt = article.title;
// //       listItem.appendChild(imageElement);

// //       // Create content element
// //       var contentElement = document.createElement('p');
// //       contentElement.innerText = article.summary;
// //       listItem.appendChild(contentElement);

// //       // Append the list item to the list
// //       listElement.appendChild(listItem);
// //   });

// //   // Append the list to the news container
// //   newsContainer.appendChild(listElement);
// // }

