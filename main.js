"use strict";

const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input-search");
const results = document.querySelector(".js-results");
let series = [];
const favoriteSeriesList = [];
const FavoriteSeriesDiv = document.querySelector(".js-favorites-series");

const renderSeries = (list, div) => {
  div.innerHTML = "";
  for (const serie of list) {
    div.innerHTML += `<div class="js-serie" id="${serie.mal_id}"> 
   <h1>${serie.title}</h1> 
   <img src="${serie.images.jpg.large_image_url}" alt="${serie.title}">
  </div>`;
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
  }
}
