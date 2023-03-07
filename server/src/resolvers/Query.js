const {getDetails, discoverMovie} = require('../modules/movies');
const {getList} = require('../genres')
const {Movie} = require('../modules/movies/entities/Movie')

async function movies(parent, args, {locale}) {
    return await discoverMovie(args.filter, locale);
}

async function moviesByIds(parent, {ids}, {locale}) {
    const requests = ids.map((id) => getDetails(id, locale));
    const data = await Promise.all(requests);

    return data.map(({data}) => new Movie(data))
}

async function genres(_, {}, {locale}) {
    return await getList(locale)
}

module.exports = {
    movies,
    moviesByIds,
    genres
}