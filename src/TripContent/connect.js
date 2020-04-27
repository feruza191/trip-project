import { connect } from 'react-redux';
import { fetchCountries } from '../state/actions';

export default connect(
    null,
    dispatch => ({
        fetchCountriesAll: () => dispatch(fetchCountries()),
}));
