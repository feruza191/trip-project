import React from 'react';
import { Button } from 'antd';
import { ProfileSelect, Home, IconBurger } from './style';
import { UnorderedListOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import { FlexStyled } from '../helpers';
import DropDown from './DropDown';

const Header = () => {
    return(
        <FlexStyled>
            <Home>Home</Home>
            <IconBurger>
                <UnorderedListOutlined />
            </IconBurger>
            <ProfileSelect overlay={DropDown}>
                <Button>
                    Filip Bednarik <DownOutlined />
                </Button>
            </ProfileSelect>
            <IconBurger>
                    <SettingOutlined />
                </IconBurger>
        </FlexStyled>
    );
};

export default Header;