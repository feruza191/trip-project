import styled from 'styled-components';
import { Layout, Col } from 'antd';
import { defaultBorder, defaultBackground, defaultLightBackground } from './helpers';

const { Header } = Layout;

export const SiderWrapper = styled(Col)`
    background: ${defaultBackground};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TripWrapper = styled.div`
    background: ${defaultLightBackground};
    padding: 20px;
`;

export const HeaderWrapper = styled(Header)`
    background: ${defaultLightBackground};
    padding: 0;
`;

export const LineDevider = styled.hr`
    margin: 0;
    height: 0;
    border: none;
    border-bottom: 1px solid ${defaultBorder};
`;

export const LayoutContent = styled.div`
    background: ${defaultLightBackground};
    padding: 0 40px;
    border-right: 1px solid ${defaultBorder};
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {
        padding: 0 20px;
    }
`;