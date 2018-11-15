import React from 'react';
import { Layout, Menu,Icon, Avatar} from 'antd';
import profPic from '../images/sridhar1.png';
import logo from '../images/hubstaff_talent_logo.png';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class HeaderComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Header >
                    <div className="container">
                        <div className="logo">
                            <a href='https://talent.hubstaff.com/' target="">
                                <img src={logo} className='logoApp' alt='hubbStaff_logoImage' />
                            </a> </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px', float: 'right' }}
                        >
                            <Menu.Item key="1"><a className="ant-menu-dark.ant-menu-horizontal ant-menu-item ant-menu-dark.ant-menu-horizontal ant-menu-submenu" href="https://talent.hubstaff.com/how_it_works" target="" rel="noopener noreferrer">HOW IT WORKS</a></Menu.Item>
                            <SubMenu title={<span className="submenu-title-wrapper">BROWSE<Icon type="down" /></span>} trigger={['click']}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="3">SEARCH</Menu.Item>
                            <Avatar src={profPic} />
                            <SubMenu title={<span className="submenu-title-wrapper">My Account<Icon type="down" /></span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </div>
                </Header>
            </div>
        );
    }
}
export default HeaderComponent;