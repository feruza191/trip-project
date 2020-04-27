import { connect } from 'react-redux';
import { filter, lowerCase, get } from "lodash/fp";
import { fetchSearchCountries, searchCountry } from '../../../state/actions';
import { getSearchCountriesData, getSearchValue } from '../../../state/selectors';

const filterCoutries = (country, filterValue) => {
	return lowerCase(get('value', country)).indexOf(lowerCase(filterValue)) >= 0;
};

const mapStateToProps = state => {
    const filterValue = getSearchValue(state);
    const searchCountries = getSearchCountriesData(state);
    const filterSearch = filter(country => filterCoutries(country, filterValue), searchCountries);

    return {
        filterSearch
    };
};

export default connect(
    mapStateToProps,
    {
        fetchSearchCountries,
        searchCountry
    }
);