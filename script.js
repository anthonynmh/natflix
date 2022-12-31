const APILINK = "https://api.themoviedb.org/3/discover/movie?api_key=c637e8df9ab4d2e3ec9b638b44f9fb93&sort_by=popularity.desc&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=c637e8df9ab4d2e3ec9b638b44f9fb93&query=";

const main = document.getElementById("displayMovies");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
  fetch(url).then(res => res.json()).then(function(data) {
    console.log(data.results);

    data.results.forEach(element => {

      const divPoster = document.createElement("div");
      divPoster.setAttribute("class", "movieContainer");
      const image = document.createElement("img");
      image.setAttribute("class", "poster");

      image.src = IMG_PATH + element.poster_path;

      divPoster.appendChild(image);
      main.appendChild(divPoster);

      /*
      const divRow = document.createElement("div");
      divRow.setAttribute("class", "row");
      const divCol = document.createElement("div");
      divCol.setAttribute("class", "col");
      const divCard = document.createElement("div");
      divCard.setAttribute("class", "card");
      const image = document.createElement("img");
      image.setAttribute("class", "poster");
      image.setAttribute("id", "image");
      const movieTitle = document.createElement("h3");
      movieTitle.setAttribute("id", "movieTitle");


      movieTitle.innerHTML = `${element.title}`;
      image.src = IMG_PATH + element.poster_path;

      divCard.appendChild(image);
      divCard.appendChild(movieTitle);
      divCol.appendChild(divCard);
      divRow.appendChild(divCol);
      main.appendChild(divRow);
      */
    });
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
