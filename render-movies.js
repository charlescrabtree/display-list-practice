export function renderMovie(movies) {
    const moviesEl = document.createElement('div');
    const upEl = document.createElement('div');
    const directorEl = document.createElement('p');
    const movieTitleEl = document.createElement('h5');
    const publicationEl = document.createElement('p');
    const downEl = document.createElement('div');

    directorEl.textContent = movies.director;
    movieTitleEl.textContent = movies.title;
    publicationEl.textContent = `Distributed by ${movies.publication.distributed} in ${movies.publication.year}`;

    moviesEl.classList.add('movies');
    upEl.classList.add('up');
    downEl.classList.add('down');
    
    moviesEl.append(upEl, downEl),
    upEl.append(movieTitleEl, directorEl);
    downEl.append(publicationEl);    


    return moviesEl;
}   


// publicationEl.textContent = `Published by ${book.publication.publisher} in ${book.publication.year}`;