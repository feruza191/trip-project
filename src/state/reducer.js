import { FETCH_COUNTRIES, FETCH_TRIPS, FETCH_SEARCH_COUNTRIES, SEARCH_COUNTRY } from "./actionTypes";
import { keyById } from "../helpers";

const initialStateCoutry = {
    tags: [],
    categories: []
};

export const countryReducer = (state = initialStateCoutry, action) => {
    switch(action.type){
        case FETCH_COUNTRIES:
            return { 
                tags: keyById(action.payload.tags), 
                categories: keyById(action.payload.categories),
            };
        default:
            return state;
    }
};

export const tripsReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_TRIPS:
            return { ...state, ...keyById(action.payload) };
        default:
            return state;
    }
};

const initialStateSearch = {
    searchCountries: [],
    filterValue: ''
};

export const searchReducer = (state = initialStateSearch, action) => {
    switch(action.type){
        case FETCH_SEARCH_COUNTRIES:
            return { ...state, searchCountries: action.payload };
        case SEARCH_COUNTRY:
            return { ...state, filterValue: action.payload };
        default:
            return state;
    }
};
