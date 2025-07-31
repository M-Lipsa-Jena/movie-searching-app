document.addEventListener("DOMContentLoaded", () => {
  let movieinfo = document.getElementById("search-input");
  let search = document.getElementById("search_btn");

  search.addEventListener("click", () => {
    let movie = movieinfo.value;
    if (movieinfo.value !== "") {
      getMovieName(movie);
    } else {
      let errorEl = document.getElementById("error");
      errorEl.textContent = "Please enter your movie name";
    }
  });
  movieinfo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      search.click();
    }
  });
});

async function getMovieName(movieTitle) {
  let Title = document.getElementById("Title");
  let Type = document.getElementById("Type");
  let Actors = document.getElementById("actors");
  let Director = document.getElementById("director");
  let boxOffice = document.getElementById("BoxOffice");
  let country = document.getElementById("Country");
  let Language = document.getElementById("Language");
  let Released = document.getElementById("Released");
  // let writer = document.getElementById("Writer");
  let rating = document.getElementById("imdbRating");
  let plot = document.getElementById("plot");
  let poster = document.getElementById("poster");
  let Awards = document.getElementById("Awards");
  let Runtime = document.getElementById("Runtime");

  
  let apiUrl = `/.netlify/functions/movie?title=${encodeURIComponent(movieTitle)}`;

  try {
    let response = await fetch(apiUrl);

    let data = await response.json();
    console.log(data)

    if (data.Response === "True") {
      let errorEl = document.getElementById("error");
      errorEl.textContent = "";

      Title.innerHTML = `Title : ${data.Title}`;
      Released.innerHTML = `Released In: ${data.Released}`;
      Type.innerHTML = `Type : ${data.Type}`;
      Actors.innerHTML = `Cast : ${data.Actors}`;
      Director.innerHTML = `Directed by : ${data.Director}`;
      boxOffice.innerHTML = `Box Office: ${data.BoxOffice}`;
      country.innerHTML = `Country: ${data.Country}`;
      Language.innerHTML = `Language: ${data.Language}`;
      // writer.innerHTML = `Writer: ${data.Writer}`;
      rating.innerHTML = `IMDb Rating: ${data.imdbRating}`;
        Awards.innerHTML = `Awards: ${data.Awards}`;
        Runtime.innerHTML = `Runtime: ${data.Runtime}`;

      let genreFormatted = data.Genre.split(",")
        .map((g) => `<div>${g.trim()}</div>`)
        .join("");
      document.getElementById("genre").innerHTML = genreFormatted;

      plot.innerHTML = `${data.Plot}`;
      poster.innerHTML =
        data.Poster !== "N/A"
          ? `<img src="${data.Poster}" alt="${data.Title} Poster">`
          : `<p>No poster available</p>`;
    } else {
      let errorEl = document.getElementById("error");
      errorEl.textContent = "Movie Not Found!!";
    }
  } catch (error) {
    console.log(`Your API is not working properly ${apiUrl}`, error);
  }
}
getMovieName("RRR");
// getMovieName("Amidst a Snowstorm of Love");
