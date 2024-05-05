// Claus
const keys = {
    api_key: 'eb1162699e9d0ec0b9ff821c8b674fe9',
    session_id: 'c4249e3a28a3bf02df659e09beb916b39b9849c4',
    account_id: 'orojas',
    auth: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjExNjI2OTllOWQwZWMwYjlmZjgyMWM4YjY3NGZlOSIsInN1YiI6IjY2MWQ1NmE2Mzg5ZGExMDE4NjM2OTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EDmZdjNMYHORooFV4uWsNya_FQG50tMUJQCw1sQlAxY'
}

let total_pages = 0;
let current_page = 1;
let lastSearch = '';
let isSearching = false

let url = `https://api.themoviedb.org/3/`

let moviesResult = document.getElementById("moviesResult");

async function setFav(id, favBool){
    moviesResult.innerHTML="";
    
    const fav = url + `account/${keys.account_id}/favorite?session_id=${keys.session_id}&api_key=${keys.api_key}`
    
    const body = JSON.stringify({
        media_type: 'movie',
        media_id: id,
        favorite: favBool
    })

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }

    const response = await fetch(fav, options)
    
    console.log(`id marked as ${favBool}`)
    showFavs();
}

// show favorites
async function showFavs() {
    moviesResult.innerHTML="";

    let favsURL = url + `account/${keys.account_id}/favorite/movies?session_id=${keys.session_id}&api_key=${keys.api_key}`;
    let response = await fetch(favsURL)
    let data = await response.json()
   
    let movies = data.results
    movies.forEach(movie => printMovie(movie, true, false))
}

async function searchMovies(newQuery) {
    isSearching = true;

    // nova cerca
    if (lastSearch != newQuery) {
        current_page = 1;
        moviesResult.innerHTML = '';
    }
    
    clearInput();
    removeActive();
    lastSearch = newQuery;
    
    let searchURL = url + `search/movie?query=${newQuery}&api_key=${keys.api_key}&page=${current_page}`
    
    // Obtener las películas favoritas
    let favsURL = url + `account/${keys.account_id}/favorite/movies?session_id=${keys.session_id}&api_key=${keys.api_key}`;
    let favsResponse = await fetch(favsURL);
    let favsData = await favsResponse.json();
    let favoriteMovies = favsData.results.map(movie => movie.id);
    
    total_pages = favsData.total_pages;
    current_page++;
    
    fetch(searchURL)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach(movie => {
                let isFavorite = favoriteMovies.includes(movie.id) 
                printMovie(movie, isFavorite, false) 
            });
        })
        .catch(err => console.log(err));
        
    // console.log('total page: ', total_pages)
    // console.log('current page: ', current_page)
    
    isSearching = false

    hideLoading();
    removeActive();
}

/* Detecta scroll */
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (!isSearching && scrollTop + clientHeight >= scrollHeight - 5 && current_page >= total_pages) {
        isSearching = true
        isLoading();
        searchMovies(lastSearch);
        current_page++;
    }
});

/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    // showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", () => searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', () => clearInput()); 

// // loader
function isLoading() {
    document.querySelector('#loader').style.display = 'block';
}

// ocultar loader
function hideLoading() {
    document.querySelector('#loader').style.display = 'none';
}

function clearInput () {
    document.getElementById("search").value = "";
}

// Elimina l'atribut active del menú
function removeActive () {
    document.querySelectorAll(".menu li a").forEach(el => el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

document.addEventListener("DOMContentLoaded", showFavs())