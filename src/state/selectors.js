import { createSelector } from 'reselect';
import { get, compose, flatMap } from "lodash/fp";

export const getCountries = createSelector(state => state, get('countries'));
export const getTrips = createSelector(state => state, get('trips'));
const getSearchCountries = createSelector(state => state, get('searches'));

export const getCountriesTags = compose(
    get('tags'),
    getCountries
);

export const getCountriesCategories = compose(
    get('categories'),
    getCountries
);

export const getSearchCountriesData = compose(
    flatMap(get('data')),
    get('searchCountries'),
    getSearchCountries
);

export const getSearchValue = compose(
    get('filterValue'),
    getSearchCountries
);
