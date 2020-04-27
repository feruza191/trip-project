import styled from 'styled-components';
import { Dropdown } from 'antd';
import { ContentHeading } from '../helpers';

export const ProfileSelect = styled(Dropdown)`
    width: 151px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Home = styled(ContentHeading)`
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const IconBurger = styled.div`
    
    @media screen and (max-width: 600px) {
        display: block;
    }
    @media only screen and (min-width: 769px) {
        display: none;
    }
`;