import styled from 'styled-components';
import { BOX, TEXT, flexHorizontal, darkGray, defaultBorder } from '../helpers';

export const TipHistoryWrapper = styled.div`
    ${BOX};
    padding: 20px;
    margin-bottom: 15px;

    & > div:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const TripHistoryName = styled.div`
    ${TEXT};
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const DetailHead = styled.div`
    font-size: 12px;
    line-height: 16px;
    color: #63666A;
`;

export const DetailDescription = styled.div`
    ${TEXT};
    color: #0A1E40;
`;

export const ManageHistory = styled.div`
    color: ${darkGray};
    padding: 15px;
    background: ${defaultBorder};
    border-radius: 10px;
    cursor: pointer;
    ${flexHorizontal};
`;
