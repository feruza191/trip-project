import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getTrips } from '../state/selectors';

export default connect(
    createStructuredSelector({
        trips: getTrips,
    })
);
