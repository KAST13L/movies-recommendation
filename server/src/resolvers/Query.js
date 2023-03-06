const {getPopular, getDetails} = require('../modules/movies')
const {Movie} = require('../modules/movies/entities/Movie')

async function movies(parent, args, {locale}) {
    return await getPopular(args.page, locale)
}
async function moviesByIds(parent, {ids}, {locale}){
    const request = ids.map((id) => getDetails(id, locale))
    const result = await Promise.all(request)
    return result.map(({data}) => new Movie(data))
}

module.exports = {
    movies, moviesByIds
}