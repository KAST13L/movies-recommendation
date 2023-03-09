import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../../variables';

export const useFilters = () => {
    const [filter, setFilterFields] = useState({
        page: 1,
        sortBy: 'popularity',
        sortDirection: SORT_DIRECTION.DESC,
        includeAdult: true
    });

    const setPage = useCallback((page: number) => {
        setFilterFields({
            ...filter,
            page
        })
    }, [filter])

    const setFilter = useCallback((filterFields: any) => {
        setFilterFields({
            ...filter,
            ...filterFields,
            year: +filterFields.year,
            primaryReleaseYear: +filterFields.primaryReleaseYear
        })
    }, [filter])

    return {
        filter,
        setPage,
        setFilter
    }
}