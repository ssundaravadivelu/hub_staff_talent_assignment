import React from 'react';
import { Layout, Menu, Input, Row, Col, Icon, Avatar } from 'antd';
import logo from '../images/hubstaff_talent_logo.png';
const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

        };


    }


    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        const pageTitle = "Home Page";
        return (
            <div>
                <Layout className="layout">
                    <Header className="container">
                        <div className="logo"
                        >
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
                            <Avatar src="https://www.logolynx.com/images/logolynx/c1/c1851c70b8a86bd87b7e519c07d57d1a.png" />
                            <SubMenu title={<span className="submenu-title-wrapper">My Account<Icon type="down" /></span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </Header>

                    <Content style={{ padding: '0 50px' }}>
                        <Search
                            placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                            className="searchBar"
                        />
                        <Row>
                            <Col span={6}><div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>

                            </Col>
                            <Col span={12} style={{ backgroundColor: 'white' }}><div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div></Col>
                            <Col span={6}><div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div>
                                <div>Data to be populated soon.</div></Col>
                        </Row>
                        <div style={{ background: 'rgba(255,255,255,0)', padding: 24, height: '63vh' }}>Application Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Data to be populated soon.
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default HomePage;