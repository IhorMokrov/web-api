function fetchNews() {
  const apiUrl = "https://www.pravda.com.ua/news/date_09032024/";

  let myFetch = fetch(apiUrl);
  console.table(myFetch);
}

fetchNews();

// Access to fetch at 'https://www.pravda.com.ua/news/date_09032024/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       console.log("OK-1");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("OK-2");
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("НАКРЫЛОСЬ:", error);
//     });
