export function renderVg(videoGame) {
    const pTag = document.createElement ('p');
    pTag.textContent = videoGame;
    pTag.classList.add('video-game');

    return pTag;
}