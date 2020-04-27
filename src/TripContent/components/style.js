import styled from 'styled-components';
import { Select } from 'antd';
import aircraftImg from '../../images/aircraft.svg';
import { flexHorizontal, TEXT, defaultText, darkGray, defaultBorder, defaultBackground } from '../../helpers';

export const Search = styled(Select)`
    max-width: 100%;
    width: 380px;

    & > .ant-select-selector {
        border-radius: 10px !important;
    }
`;

export const SelectImg = styled.img`
    margin-right: 10px
`;

export const AirCraftImg = styled.img`
    background: url(${aircraftImg}) no-repeat top right ;
    background-size: cover;
    width: 240px;
    padding: 75px;
    position: absolute;
    right: 0;
    bottom: 15px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TripSearchWrapper = styled.div`
    position: relative;
`;

export const CountryTagWrapper = styled.div`
    margin-top: 20px;
    background: ${defaultBackground};
    border-radius: 10px;
    height: 40px;
    padding: 10px;
    margin-right: 20px;
    ${flexHorizontal}

    & > img {
        margin-right: 10px;
    } 
`;

export const CountryName = styled.div`
    color: ${darkGray};
    ${TEXT}
    padding: 5px 0;
`;

export const FlighCategoryWrapper = styled.div`
    ${flexHorizontal}
    position: relative;
    margin-top: 60px;

    &:after{
        content: '';
        position: absolute;
        border-top: 1px solid ${defaultBorder};
        top: 35px;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const FlighCategoryName = styled.div`
    color: ${defaultText};
    ${TEXT};
`;

export const ShowAll = styled.div`
    background: ${defaultBackground};
    border-radius: 6px;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    padding: 5px 10px;
`;

export const FlightDate = styled(FlighCategoryName)`
    position: relative;
    margin-left: 40px;

    &:before {
        content: '';
        border-left: 1px solid ${defaultText};
        position: absolute;
        width: 1px;
        top: 6px;
        height: 10px;
        left: -20px;
    }
`;

export const FlightDetailWrapper = styled.div`
    background: ${defaultBackground};
    border-radius: 10px;
    max-width: 100%;
    margin-top: 35px;
    padding: 20px;
    ${flexHorizontal}

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const FlightDateWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const FlightNumber= styled.div`
    color: #0A1E40;
    ${TEXT};
`;

export const IconItemWrapper= styled.div`
    cursor: pointer;
    background: ${defaultBorder};
    border-radius: 10px;
    padding: 15px;
    width:48px;
`;

export const IconsWrapper= styled.div`
    display: flex;

    & > div:last-child{
        margin-left: 10px;
    }
`;

export const FlightNumberWrapper= styled.div`
    ${flexHorizontal};

    & > div:last-child{
        margin-left: 24px;
    }
`;