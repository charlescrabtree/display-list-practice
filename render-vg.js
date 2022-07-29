export function renderGame(games) {
    const gamesEl = document.createElement('div');
    const topEl = document.createElement('div');
    const gameTitleEl = document.createElement('h2');
    const studioEl = document.createElement('h4');
    const bottomEl = document.createElement('div');
    const leftEl = document.createElement('div');
    
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
    bottomEl.classList.add('bottom');
    leftEl.classList.add('left');

    gamesEl.append(topEl, bottomEl);
    topEl.append(gameTitleEl, bottomEl);
    bottomEl.append(genresEl, yearEl);
    
    



    return gamesEl;
}
