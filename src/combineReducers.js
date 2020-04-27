import { combineReducers } from 'redux';
import { countryReducer, tripsReducer, searchReducer } from './state/reducer';

export default combineReducers({
    countries: countryReducer,
    trips: tripsReducer,
    searches: searchReducer,
});