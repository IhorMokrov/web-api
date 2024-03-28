async function getAPIresponse() {
  // NASA API-key:
  const div = document.querySelector(".container");

  // NASA:
  // const apiKey = "OaPinqeq6WhflrHOHkq5dJ2mFVravvKkjEC1gJXu";
  // const apiUrl = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${apiKey}`;

  // WEATHER:
  // const lat = "50.406663";
  // const lon = "30.335415";
  // const cnt = 7;
  // const apiKey = "4f560c6d87f9572b10f95d7b21a37b7c";
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  let result = await fetch(apiUrl);
  let resultWait = await result.json();
  console.log(resultWait);

  const { url } = resultWait;
  // console.log(url);

  div.innerHTML = `<img class="srcImg" src="${url}" alt=""></img>`;

  return url;
}

getAPIresponse();

//  https://api.openweathermap.org/data/2.5/forecast/daily?lat=50.406663&lon=30.335415&cnt=16&appid=4f560c6d87f9572b10f95d7b21a37b7c
