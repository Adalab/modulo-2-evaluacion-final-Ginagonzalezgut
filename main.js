"use strict";

const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input-search");
const results = document.querySelector(".js-results");

const handleClick = (event) => {
  event.preventDefault();
  const searchString = inputSearch.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${searchString}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const series = data.data;
      console.log(series);
      for (const serie of series) {
        results.innerHTML += `<div> 
         <h1>${serie.title}</h1> 
         <img src="${serie.images.jpg.large_image_url}" alt="${serie.title}">
        </div>`;
        console.log(serie);
      }
    });
};

buttonSearch.addEventListener("click", handleClick);
