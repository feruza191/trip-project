import styled from 'styled-components';
import { Menu, Button as ButtonLib } from 'antd';
import { defaultText, defaultBackground, defaultLightBackground } from '../helpers';

export const MenuBar = styled(Menu)`
    background: ${defaultBackground};
    color: ${defaultText};

    & li {
        height: 30px;
    }
    & > .ant-menu-item-selected{
        background-color: transparent!important;
    }
`;

export const Button = styled(ButtonLib)`
    border-radius: 10px;
    height: 40px;
    margin: 40px auto;
    display: block;
`;

export const BadgeItem = styled.div`
    background: #338AF3;
    border-radius: 30px;
    width: 20px;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: ${defaultLightBackground};
    position: absolute;
    right: 0;
    top: 12px;
`;

export const MenuInner = styled.div`
    position: relative;
`;
