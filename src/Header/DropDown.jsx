import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

const DropDown = () => {
    return(
        <Menu>
            <Menu.Item key="1">
                <UserOutlined />
                    My profile
            </Menu.Item>
            <Menu.Item key="2">
                <SettingOutlined />
                    Settings
            </Menu.Item>
            <Menu.Item key="3">
                <LoginOutlined />
                    Log out
            </Menu.Item>
        </Menu>
    );
};

export default DropDown;