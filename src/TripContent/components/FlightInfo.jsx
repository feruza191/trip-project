import React from 'react';
import { FlighCategoryWrapper, FlighCategoryName, ShowAll } from './style';
import FlightDetail from './FlightDetail';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCountriesCategories } from '../../state/selectors';
import { map, get, constant } from "lodash/fp";


const FlightInfo = ({ categories, edit }) => (
    map(category => (
        <div key={get('id', category)}>
            <FlighCategoryWrapper>
                <FlighCategoryName>{get('categoryName', category)}</FlighCategoryName>
                <ShowAll>SHOW ALL</ShowAll>
            </FlighCategoryWrapper>
            <FlightDetail category={category} edit={edit}/>
        </div>
    ), categories)
);

export default connect(
    createStructuredSelector({
        categories: getCountriesCategories,
        edit: constant(true)
    })
)(FlightInfo);