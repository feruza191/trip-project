import React from 'react';
import { Select, Col, Row } from 'antd';
import { Search, AirCraftImg, TripSearchWrapper, SelectImg } from '../style';
import CountryTag from '../CountryTag';
import { get, map } from "lodash/fp";

const { Option } = Select;

const TripSearch = ({ filterSearch, searchCountry }) => {
    const renderFilteredList = () => {
        return map(f => 
            <Option key={get('value', f)} value={get('value', f)}>
                <SelectImg alt={get('text', f)} src={require(`../../../images/${get('icon', f)}`)} />
                {get('text', f)}
            </Option>, 
        filterSearch);
    };      

    return(
        <TripSearchWrapper>
        <Row>
            <Col sm={26} lg={12}>
                <Search
                    showSearch
                    placeholder="Where do you want to travel?"
                    onSearch={(value) => searchCountry(value)}
                >
                    {renderFilteredList()}
                </Search>
                <CountryTag />
            </Col>
            <Col sm={0} lg={12}>
                <AirCraftImg />
            </Col>
        </Row>
        </TripSearchWrapper>
    );
};

export default TripSearch;