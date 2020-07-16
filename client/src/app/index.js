

document.addEventListener("DOMContentLoaded", function() {
require('dotenv').config();

  function fetchUser() {
    fetch("https://api.github.com/users/lgm527", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "lgm527",
        "Authorization": "token " + process.env.GH_TOKEN,
      }
    })
    .catch(error => console.error(error))
    .then(res => res.json())
    .then(renderCard)
  }

  fetchUser();

  function renderCard({...user}) {
    console.log(user);
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("octocat").href = user.html_url;
    document.getElementById("username").innerText = `@${user.login}`;
    document.getElementById("created_at").innerHTML += `<i>Coding for the Octocat's since</i> ${new Date(user.created_at)}`;
    document.getElementById("repos").innerText += `${user.public_repos} Repos`;
    document.getElementById("gists").innerText += `${user.public_gists} Gists`;
  }

  // const card = document.getElementById("stat_card");

});
