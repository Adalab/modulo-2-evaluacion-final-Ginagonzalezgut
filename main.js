"use strict";

const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input-search");
const results = document.querySelector(".js-results");
let series = [];
let favoriteSeriesList = [];
const FavoriteSeriesDiv = document.querySelector(".js-favorites-series");

const renderSeries = (list, div) => {
  div.innerHTML = "";
  console.log(list);
  for (const serie of list) {
    if (
      serie.images.jpg.large_image_url ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      div.innerHTML += `<div class="js-serie" id="${serie.mal_id}"> 
      <h1 class="serie-title">${serie.title}</h1> 
      <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${serie.title}"> 
    </div>`;
    } else {
      div.innerHTML += `<div class="js-serie" id="${serie.mal_id}"> 
    <h1 class="serie-title">${serie.title}</h1> 
    <img src="${serie.images.jpg.large_image_url}" alt="${serie.title}">
    </div>`;
    }
  }

  const seriesDom = document.querySelectorAll(".js-serie");
  for (const serieDom of seriesDom) {
    serieDom.addEventListener("click", handleClickSerie);
  }

};

const handleClickSearch = (event) => {
  event.preventDefault();
  const searchString = inputSearch.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${searchString}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      series = data.data;
      renderSeries(series, results);
      inputSearch.value = "";
    });
};

buttonSearch.addEventListener("click", handleClickSearch);

function handleClickSerie(event) {
  const serieClickId = event.currentTarget.id;
  const serieSelect = series.find((serie) => {
    return serie.mal_id === parseInt(serieClickId);
  });
  const indexSeriesinFavorite = favoriteSeriesList.findIndex(
    (favoriteSerie) => {
      return favoriteSerie.mal_id === parseInt(serieClickId);
    }
  );
  if (indexSeriesinFavorite === -1) {
    favoriteSeriesList.push(serieSelect);
    renderSeries(favoriteSeriesList, FavoriteSeriesDiv);
    localStorage.setItem("favoriteseries", JSON.stringify(favoriteSeriesList));
  }
}

const favoriteSeriesLocalStorage = JSON.parse(
  localStorage.getItem("favoriteseries")
);

if (favoriteSeriesLocalStorage) {
  favoriteSeriesList = favoriteSeriesLocalStorage;
  renderSeries(favoriteSeriesList, FavoriteSeriesDiv);
}

function handleClickDeleted(event) {
  event.preventDefault();
  const serieClickId = event.currentTarget.id;
  const position = favoriteSeriesList.findIndex((serie) => {
    return parseInt(serieClickId) === serie.mal_id;
  });
  console.log(position);
  const deletedSerie = favoriteSeriesList.splice(position, 1);
  renderSeries(favoriteSeriesList, FavoriteSeriesDiv);
}

const resetButton = document.querySelector(".js-button-reset");

function handleClickReset(event) {
  event.preventDefault();
  localStorage.removeItem("favoriteseries");
  favoriteSeriesList = [];
  renderSeries(favoriteSeriesList, FavoriteSeriesDiv);
}
resetButton.addEventListener("click", handleClickReset);
