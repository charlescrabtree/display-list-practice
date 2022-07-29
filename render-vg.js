
// const gameList = document.getElementById('game-list');
// for (let game of games) {
//   const gamesEl = renderGameList(game);

//   gameListEl.append(gamesEl);
// }

export function renderGame(games) {
    const gamesEl = document.createElement('div');
    const gameTitleEl = document.createElement('h1');
    const studioEl = document.createElement('h2');
    const genresEl = document.createElement ('ul');
    const yearEl = document.createElement ('p'); 

    gameTitleEl.textContent = games.title;
    studioEl.textContent = `This game was made by ${games.studio}`;
    // genreEl.textContent = `This game falls under the ${games.genre} categories`;
    yearEl.textContent = `They released this gem in ${games.yearReleased}`;

    for (let genre of games.genre) {
        const genreEl = document.createElement('li');

        genreEl.textContent = `This game falls under the ${genre} categories`;
        
        genresEl.append(genreEl);
    }

    gamesEl.classList.add('games');
    gamesEl.append(games);
    
    



    return gamesEl;
}
