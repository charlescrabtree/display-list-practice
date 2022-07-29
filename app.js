import { meals } from './array-meals.js';
import { renderMeal } from './render-meals.js';
import { pokemon } from './array-pokemon.js';
import { renderPoke } from './render-poke.js';
import { games } from './video-game-array.js';

// import functions and grab DOM elements
const mealList = document.getElementById('meal-list');
for (let meal of meals) {
    // const div = document.createElement('div');
    // div.classList.add('Meal');
    // div.textContent = meal;
    const mealEl = renderMeal(meal);
    mealList.append(mealEl);
}


const pokemonList = document.getElementById('pokemon-list');
for (let pokeItem of pokemon) {
    const pokeEl = renderPoke(pokeItem);
  // const divEl = document.createElement('div');
  // const pTag = document.createElement('p');
  // const pokeEvoEl = document.createElement('h2');
  // const colorEl = document.createElement('p');

    // pokeEvoEl.textContent = pokeItem.evolution;
    // colorEl.textContent = pokeItem.color;
    // divEl.append(pTag, pokeEvoEl, colorEl);
  
    // pTag.textContent = pokeItem.name;

    pokemonList.append(pokeEl);
}

const gameList = document.getElementById('vg-list');
  for (let game of games) {
    const gamesEl = renderGameList(game);

    gameListEl.append(gamesEl);
  }