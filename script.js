async function getAPIresponse() {
  // NASA API-key:
  const div = document.querySelector(".container");

  const apiKey = "OaPinqeq6WhflrHOHkq5dJ2mFVravvKkjEC1gJXu";
  const apiUrl = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${apiKey}`;

  let result = await fetch(apiUrl);
  let resultWait = await result.json();
  console.log(resultWait);

  const { url } = resultWait;
  // console.log(url);

  div.innerHTML = `<img class="srcImg" src="${url}" alt=""></img>`;

  return url;
}

getAPIresponse();

// async function showAvatar() {
//   // запрашиваем JSON с данными пользователя
//   const apiKey = "OaPinqeq6WhflrHOHkq5dJ2mFVravvKkjEC1gJXu";
//   const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
//   let response = await fetch(apiUrl);
//   let user = await response.json();

//   console.log(response);
//   console.log(user.hdurl);

//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();
