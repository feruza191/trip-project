import { FETCH_COUNTRIES, FETCH_TRIPS, FETCH_SEARCH_COUNTRIES, SEARCH_COUNTRY } from "./actionTypes";
import endpoint from "../endpoint";
import { message } from 'antd';


export const fetchCountries = () => async dispatch => {
    try {
        const response = await endpoint.get('/countries');

        dispatch({ type: FETCH_COUNTRIES, payload: response.data });
    } catch(error){
        message.error(error.message);
    }
};

export const fetchTrips = () => async dispatch => {
    try {
        const response = await endpoint.get('/trips');

        dispatch({ type: FETCH_TRIPS, payload: response.data });
    } catch(error){
        message.error(error.message);
    }
};

export const fetchSearchCountries = () => async dispatch => {
    try {
        const response = await endpoint.get('/searches');

        dispatch({ type: FETCH_SEARCH_COUNTRIES, payload: response.data });
    } catch(error){
        message.error(error.message);
    }
};

export const searchCountry = value => {
    return {
        type: SEARCH_COUNTRY,
        payload: value
    };
};