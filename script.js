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

  // calendarific.com
  const headers = {
    Authorization: "dd57d7523b80e08db3fe0bddd5322787",
  };
  const YOUR_APP_TOKEN = "dd57d7523b80e08db3fe0bddd5322787";
  const apiUrl = `https://favqs.com/api/quotes/`;
  // https://calendarific.com/api/v2/holidays?api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs
  //https://calendarific.com/api/v2/holidays?api_key=ShPnI4JwZuWu9iIT2L2PXkr7cqFiO2PZ
  let result = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=dd57d7523b80e08db3fe0bddd5322787`,
      "If-None-Match": "558f0b9bea2e6910b1f93de7f4c0d47c",
    },
  });
  console.log(result);

  // let result = await fetch(apiUrl);
  // let resultWait = await result.json();

  // const { url } = resultWait;
  // console.log(url);

  // div.innerHTML = `<img class="srcImg" src="${url}" alt=""></img>`;

  // return url;
}

getAPIresponse();

//  https://api.openweathermap.org/data/2.5/forecast/daily?lat=50.406663&lon=30.335415&cnt=16&appid=4f560c6d87f9572b10f95d7b21a37b7c
