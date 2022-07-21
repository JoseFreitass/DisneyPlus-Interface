const API_KEY = '36f6b969572b120032312f924a92e7e6'
const API_LANGUAGE = 'pt-br'
const BUTTON_PLAY = '<button type="button"><img src="/assets/icon-play-button.png" alt="Icon play button"></button>'



const LIST_MOVIES = ['tt1772341', 'tt2245084','tt1453405','tt2948356','tt0398286','tt2294629','tt3606756','tt1217209','tt0317219','tt2277860','tt3521164','tt1323594']


function getUrlMovie(movieid){
    return `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=${API_LANGUAGE}`
}



// Script para inicializar os dados do filme principal
fetch(getUrlMovie('tt1772341')).then(response => response.json()).then(data => {
    const app = document.getElementById('app')

    const title = document.querySelector(' .movie h1')
    const description = document.querySelector(' .movie p')
    const info = document.querySelector(' .movie span')
    const rating = document.querySelector(' .rating strong')

    const yearRelease = data.release_date.split('-')[0]

    title.innerHTML = data.title
    description.innerHTML = data.overview
    rating.innerHTML = data.vote_average
    info.innerHTML = yearRelease + ' - ' + data.genres[0].name + ' - Movie'

    const image =  `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    app.style.backgroundImage  =  `linear-gradient(90.18deg, rgba(13, 22, 46, 0.7) 23.21%, rgba(13, 22, 46, 0.0001) 96.69%), url('${image}')`
})

const moviesList = document.getElementById('movies__list')

function createMovie(movieId){
    fetch(getUrlMovie(movieId)).then(response => response.json()).then(data => {
        const movie = document.createElement('li')
        const genre = `<span>${data.genres[0].name}</span>`
        const title = `<strong>${data.title}</strong>`

        movie.innerHTML = genre + title + BUTTON_PLAY

        moviesList.appendChild(movie)
    })
}

function loadListMovies(){
    LIST_MOVIES.map(createMovie)
}
loadListMovies()
