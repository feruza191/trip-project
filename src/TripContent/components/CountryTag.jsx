import React from 'react';
import { CountryName, CountryTagWrapper } from './style';
import { connect } from 'react-redux';
import { getCountriesTags } from '../../state/selectors';
import { createStructuredSelector } from 'reselect';
import { map, get } from "lodash/fp";
import { WrapperFlex } from '../../helpers';

const CountryTag = ({ tags }) => {
    const renderTags = () => {
        return(
            map(tag => (
                <CountryTagWrapper key={get('id', tag)}>
                    <img alt={get('coutryName', tag)} src={require(`../../images/${get('img', tag)}`)} />
                    <CountryName>{get('coutryName', tag)}</CountryName>
                </CountryTagWrapper>
            ), tags)
        );
    };

    return(
        <WrapperFlex>
            {renderTags()}
        </WrapperFlex>
    );
};

export default connect(
    createStructuredSelector({
        tags: getCountriesTags,
    })
)(CountryTag);