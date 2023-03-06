export type MoviesType = {
    page: number,
    totalResults: number,
    totalPages: number,
    results: Array<MovieType>
}
export type MovieType =  {
    id: string,
    title: string,
    releaseDate: string,
    posterPath: string,
    genres: GenreType[],
    adult: boolean,
    overview: string,
    originalTitle: string,
    originalLanguage: string,
    backdropPath?: string,
    popularity: string,
    voteCount: number,
    video: boolean,
    voteAverage: number
}
export type GenreType = {
    id: number,
    name: string
}