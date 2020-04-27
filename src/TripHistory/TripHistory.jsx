import React from 'react';
import { map, get } from 'lodash/fp';
import { 
    TipHistoryWrapper, 
    TripHistoryName, 
    DetailHead, 
    DetailDescription,
    ManageHistory
} from './style';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FlexStyled } from '../helpers';
import { CountryName } from '../TripContent/components/style';

const TipHistory = ({ trips }) => (
    map(trip => {
        return (
            <div key={get('id', trip)}>
                <TripHistoryName>{get('categoryTrip', trip)}</TripHistoryName>
                {
                    map(item => (
                        <TipHistoryWrapper key={get('id', item)}>
                            <FlexStyled>
                                <CountryName>{get('coutryName', item)}</CountryName>
                                <img alt={get('coutryName', item)} src={require(`../images/${get('img', item)}`)} />
                            </FlexStyled>
                            <div>
                                <DetailHead>Address</DetailHead>
                                <DetailDescription>{get('address', item)}</DetailDescription>
                            </div>
                            <div>
                                <DetailHead>Date</DetailHead>
                                <DetailDescription>{`${get('dateFrom', item)} - ${get('dateTo', item)}`}</DetailDescription>
                            </div>
                            <div>
                                <DetailHead>Details</DetailHead>
                                <DetailDescription>{get('details', item)}</DetailDescription>
                            </div>
                            <ManageHistory>
                                View Details
                                <ArrowRightOutlined />
                            </ManageHistory>
                        </TipHistoryWrapper>
                    ), trip.items)
                }
            </div>
        );
    }, trips)
);

export default TipHistory;