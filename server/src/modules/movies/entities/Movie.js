const {IMAGE_BASE_URL} = require("../../../config");

class Movie {
    constructor(movie) {
        this.id = movie.id
        this.title = movie.title
        this.releaseDate = movie.release_date
        this.posterPath = IMAGE_BASE_URL + movie.poster_path
        this.adult = movie.adult
        this.overview = movie.overview
        this.originalTitle = movie.original_title
        this.originalLanguage = movie.original_language
        this.backdropPath = movie.backdrop_path
        this.popularity = movie.popularity
        this.voteCount = movie.vote_count
        this.video = movie.video
        this.voteAvarage = movie.vote_average
    }
}

module.exports = {
    Movie
}