export function renderPoke(pokemon) {

    const divEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const pokeEvoEl = document.createElement('h2');
    const colorEl = document.createElement('p');


    nameEl.textContent = pokemon.name;
    pokeEvoEl.textContent = pokemon.evolution;
    colorEl.textContent = pokemon.color;
    
    divEl.append(nameEl, pokeEvoEl, colorEl);

    
    return divEl;

}