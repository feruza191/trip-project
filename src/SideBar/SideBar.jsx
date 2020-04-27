import React from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined,
    StarOutlined,
    ClockCircleOutlined,
    FileOutlined,
    HistoryOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { MenuBar, Button, BadgeItem, MenuInner } from './style';

const SideBar = () => {
    return (
        <div>
            <Button type="primary" icon={<PlusOutlined />} size="middle">
                New Trip
            </Button>
            <MenuBar theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <span>
                    <HomeOutlined />
                        Home
                    </span>
                </Menu.Item>
                <Menu.Item key="2">
                    <span>
                    <StarOutlined />
                        Favourites
                    </span>
                </Menu.Item>
                <Menu.Item key="3">
                    <span>
                    <ClockCircleOutlined />
                        Planned
                    </span>
                </Menu.Item>
                <Menu.Item key="4">
                    <MenuInner>
                        <FileOutlined />
                            Drafts
                        <BadgeItem>1</BadgeItem>
                    </MenuInner>
                </Menu.Item>
                <Menu.Item key="5">
                    <span>
                    <HistoryOutlined />
                    History
                    </span>
                </Menu.Item>
            </MenuBar>
        </div>
    );
};

export default SideBar;