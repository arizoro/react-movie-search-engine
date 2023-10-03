import axios from 'axios'

const url = import.meta.env.VITE_APP_BASEURL
const apiKey = import.meta.env.VITE_APP_APIKEY;


export const movieList = async() => {
    const movie = await axios.get(`/api?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(q) => {
    const movie = await axios.get(`${url}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return movie.data
}


