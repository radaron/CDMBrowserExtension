const addButtonAfterMovieName = () => {
    const movieTitleDivElement = document.querySelector('[data-testid=hero__primary-text]').parentElement
    if (movieTitleDivElement) {
        const button = document.createElement('button');

        button.innerText = 'CDM';
        button.className = 'cdm-button';

        button.onclick = () => {
            const url = window.location.href;
            const imdbId = url.split('/').find(part => part.startsWith('tt'));
            if (imdbId) {
                window.open(
                    `https://cdm.radaron.hu/manage/download?`
                    +`pattern=${imdbId}&searchWhere=imdb&searchCategory=all_own`,
                    '_blank'
                );
            }
        };
        movieTitleDivElement.appendChild(button);
    }
};

// Inject the CSS file into the page
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('src/content.css');
document.head.appendChild(link);


window.onload = addButtonAfterMovieName;