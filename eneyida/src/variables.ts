export const MAX_SELECTED_MOVIES = 20;
export const CONFIRM_TIMEOUT = 3000;
export const URI_FOR_GRAPHQL = window.location.hostname === 'localhost' ? 'http://localhost:4000/graphql' : `${window.location.origin}/graphql`
export const LOCALES = {
    ENGLISH: 'en-us',
    UKRAINIAN: 'uk'
}
export const LOCALHOST_URL_LENGTH = window.location.hostname === 'localhost' ? 15 : window.location.origin.length + 7;
export const STORAGE_KEY = 'locale';

export const SORT_OPTIONS = [
    { label: 'popularity', value: 'popularity'},
    { label: 'release_date', value: 'release_date'},
    { label: 'revenue', value: 'revenue'},
    { label: 'primary_release_date', value: 'primary_release_date'},
    { label: 'original_title', value: 'original_title'},
    { label: 'vote_average', value: 'vote_average'},
    { label: 'vote_count', value: 'vote_count'},
];

export const SORT_DIRECTION = {
    DESC: 'desc',
    ASC: 'asc'
}