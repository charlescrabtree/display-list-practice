import { meals } from './array-meals.js';
import { renderMeal } from './render-meals.js';
import { pokemon } from './array-pokemon.js';
import { renderPoke } from './render-poke.js';
import { games } from './video-game-array.js';
import { renderGame } from './render-vg.js';
import { movies } from './array-movies.js';
import { renderMovie } from './render-movies.js';


const mealList = document.getElementById('meal-list');
for (let meal of meals) {

    const mealEl = renderMeal(meal);

    mealList.append(mealEl);
}


const pokemonList = document.getElementById('pokemon-list');
for (let pokeItem of pokemon) {

    const pokeEl = renderPoke(pokeItem);

    pokemonList.append(pokeEl);
}

const gameListEl = document.getElementById('game-list');
for (let game of games) {
    const gamesEl = renderGame(game);

    gameListEl.append(gamesEl);
}

const moviesListEl = document.getElementById('movies-list');
for (let movie of movies) {
    const moviesEl = renderMovie(movie);

    moviesListEl.append(moviesEl);
}