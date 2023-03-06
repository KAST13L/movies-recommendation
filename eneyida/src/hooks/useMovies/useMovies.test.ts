import {act, renderHook} from '@testing-library/react-hooks';
import {useMovies} from "./useMovies";
import {movies} from "../../stories/stub";
import {MAX_SELECTED_MOVIES} from "../../variables";

describe('test useMovies hook', () => {
    const basicMovie = movies[0];

    it('should select movie', () => {
        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies[0].title).toBe('Title movie')
        expect(result.current.selectedMovies.length).toBe(1)
    });

    it('should delete movie', () => {
        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBeTruthy()

        act(() => {
            result.current.deleteMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBeFalsy()
    });

    it('should select movie only once', () => {
        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(1)

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(1)
    });

    it('should add no more movies than it is allowed', () => {
        const {result} = renderHook(() => useMovies())

        for (let i = 0; i < MAX_SELECTED_MOVIES; i++) {
            act(() => {
                result.current.selectMovie({
                    ...{...basicMovie},
                    id: `id:${i}`
                })
            })
        }
        expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)

        act(() => {
            result.current.selectMovie({
                ...basicMovie,
                id: 'other id'
            })
        })
        expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)
    })

    it('should delete movie by id', () => {
        const {result} = renderHook(() => useMovies())

        for (let i = 0; i < MAX_SELECTED_MOVIES; i++) {
            act(() => {
                result.current.selectMovie({
                    ...basicMovie,
                    id: `id:${i}`
                })
            })
        }

        const movieForDeleted = result.current.selectedMovies[2]

        act(() => {
            result.current.deleteMovie(movieForDeleted)
        })
        expect(result.current.selectedMovies.some(movie => movie.id === movieForDeleted.id)).toBeFalsy()
    });
});