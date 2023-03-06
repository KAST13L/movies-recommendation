const axios = require('axios')
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config/index')

const getPopular = async (page, language) => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`)

    return new Movies(result.data)
}
const getDetails = (id, language) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`)
}

module.exports = {
    getPopular, getDetails
}