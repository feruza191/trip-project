import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FlightInfo, TripSearch } from './components';


const TripContent = () => {
    return(
        <Fragment>
            <TripHeading>Start New Trip</TripHeading>
            <TripSearch />
            <FlightInfo />
        </Fragment>
    );
};

export const TripHeading = styled.h1`
    line-height: 41px;
    margin-top: 35px;
`;


export default TripContent;