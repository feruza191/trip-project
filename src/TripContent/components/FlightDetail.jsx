import React from 'react';
import { map, get } from "lodash/fp";
import { 
    FlightDetailWrapper, 
    CountryName, 
    FlightDate, 
    FlightDateWrapper, 
    FlightNumber,
    IconItemWrapper,
    IconsWrapper,
    FlightNumberWrapper
} from './style';
import { DeleteOutlined, ArrowRightOutlined, StarOutlined } from '@ant-design/icons';

const FlightDetail = ({ category, edit }) => {
    return(
        map(item => (
            <FlightDetailWrapper key={get('id', item)}>
                <FlightNumberWrapper>
                    <div>
                    <img alt={get('coutryName', item)} src={require(`../../images/${get('img', item)}`)} />
                    </div>
                    <div>
                        <FlightDateWrapper>
                            <CountryName>{get('coutryName', item)}</CountryName>
                            <FlightDate>{`${get('dateFrom', item)} - ${get('dateTo', item)}`}</FlightDate>
                        </FlightDateWrapper>
                        <FlightNumber>{get('address', item)}</FlightNumber>
                    </div>
                </FlightNumberWrapper>
                <IconsWrapper>
                    <IconItemWrapper>
                        { edit ? <DeleteOutlined /> : <StarOutlined /> }
                    </IconItemWrapper>
                    <IconItemWrapper>
                        <ArrowRightOutlined />
                    </IconItemWrapper>
                </IconsWrapper>
            </FlightDetailWrapper>
    ), category.items));
};

export default FlightDetail;