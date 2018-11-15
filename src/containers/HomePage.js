import React from 'react';
import { Layout, Menu, Input, Row, Col, Icon, Avatar, Pagination, Select, Checkbox, Dropdown, Button, Slider, InputNumber, Tag } from 'antd';
import logo from '../images/hubstaff_talent_logo.png';
import timeTrackerLogo from '../images/time_track_logo.png';
import profPic from '../images/sridhar1.png';
const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            minValue: 1,
            maxValue: 100
        };
    }

    onChange = (value) => {
        this.setState({ minValue: value[0], maxValue: value[1] })
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

        const Option = Select.Option;

        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        const pageTitle = "Home Page";
        return (
            <div>
                <Layout className="layout">
                    <Header >
                        <div className="container">
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

                    <Content>
                        <div className="container">
                            <Search
                                placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                                className="searchBar"
                            />
                            <Row>
                                <div className="filters-sidebar">
                                    <Col span={6}>
                                        <div className="filters-sidebar-inner">
                                            <h5 className='section-subtitle from-sidebar'><span className="pull-left">FILTERS</span><a href="/" className="clear-link">Clear all filters</a></h5>
                                            <div className="form-group">
                                                <label className="label">
                                                    <span className="labelName">Skills</span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <Select
                                                    mode="multiple"
                                                    size={"large"}
                                                    placeholder="Please select"
                                                    defaultValue={['a10', 'c12']}
                                                    style={{ width: '100%' }}>
                                                    {children}
                                                </Select>
                                            </div>

                                            <div className="form-group">
                                                <label className="label ">
                                                    <span className="labelName">Availabilty <Icon type="exclamation-circle" /></span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <div style={{ float: 'left' }}><Checkbox >Hourly</Checkbox></div>
                                                <div style={{ float: 'left' }}><Checkbox >Part-time(20 hrs/wk)</Checkbox></div>
                                                <div style={{ float: 'left' }}><Checkbox >Full-time(40 hrs/wk)</Checkbox></div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label ">
                                                    <span className="labelName">Job type <Icon type="exclamation-circle" /></span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <Dropdown overlay={menu} trigger={['click']}>
                                                    <Button>
                                                        Select a Job Type <Icon type="down" />
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    <span className="labelName">Pay rate/hr($)</span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <div><InputNumber
                                                    min={1}
                                                    max={100}
                                                    className="minInputBox"
                                                    value={this.state.minValue}
                                                    onChange={(e) => { this.setState({ minValue: e }) }}
                                                /> <span className="limitter">-</span>
                                                    <InputNumber
                                                        min={1}
                                                        max={100}
                                                        value={this.state.maxValue}
                                                        onChange={(e) => { this.setState({ maxValue: e }) }}
                                                    /></div>
                                                <Slider
                                                    min={1}
                                                    max={100}
                                                    className="maxInputBox"
                                                    range defaultValue={[this.state.minValue, this.state.maxValue]}
                                                    onChange={this.onChange}
                                                    value={[this.state.minValue, this.state.maxValue]}
                                                />
                                                <div style={{ position: 'relative' }}>
                                                    <div style={{ position: 'absolute', left: '7px', fontWeight: '500' }}>1</div>
                                                    <div style={{ float: 'right', fontWeight: '500' }}>100</div>
                                                </div>
                                                <div style={{ float: 'left' }}><Checkbox className="slideText">Include profiles without pay rates</Checkbox></div>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    <span className="labelName">Experience level</span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <Dropdown overlay={menu} trigger={['click']}>
                                                    <Button>
                                                        Select your Experience level <Icon type="down" />
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    <span className="labelName">Countries</span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <Select
                                                    mode="multiple"
                                                    size={"large"}
                                                    placeholder="Enter state,province or country"
                                                    defaultValue={['a10', 'c12']}
                                                    style={{ width: '100%' }}>
                                                    {children}
                                                </Select>
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    <span className="labelName">Languages</span>
                                                    <span className="clear-link clearAction">Clear</span>
                                                </label>
                                                <Select
                                                    mode="multiple"
                                                    size={"large"}
                                                    defaultValue={['a10', 'c12']}
                                                    style={{ width: '100%' }}>
                                                    {children}
                                                </Select>
                                            </div>
                                        </div>

                                    </Col>
                                </div>

                                <Col span={12} >
                                    <div className="content-section">
                                        <div className="row margin-bottom-30">
                                            <div className="col-sm-12">
                                                <h5 className="section-subtitle no-margin pull-left">Results(24)</h5>
                                                <div className="sort_by">
                                                    <label className="sort_by label">Sort by</label>
                                                    <div className="custom-select-wrapper sort-results-select">
                                                        <Select defaultValue="Relevance" style={{ width: 130 }}>
                                                            <Option value="Relevance">Relevance</Option>
                                                            <Option value="Budget">Budget</Option>
                                                            <Option value="Pay rate">Pay rate</Option>
                                                            <Option value="Date added">Date added</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-result">
                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                            <div className="main-details">
                                                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                                                <Tag color="#56d48f">hourly</Tag>
                                                <div className="content-pay-rate">$44/hr</div>
                                                <div className="job-company">
                                                    <a className="is-inline-block job-agency margin-right-20" rel="nofollow" target="_blank" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                                                    <span className="location text-success margin-right-20">
                                                        <i class="hi hi-pin" title="From"></i>
                                                        Indianopolis,IN
                                                    </span>
                                                    <span style={{ fontWeight: 500 }}>Reply rate: 82%</span>
                                                </div>
                                                <div className="profil-bio push-bottom-10">
                                                    We are looking for a Marketing Guru for our Company.
                                                    Must have experience in Social Media Marketing, Social Media Management, G...
                                                </div>
                                                <div className="list-inline push-bottom-20">
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">JavaScript</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Android</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UX</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">UI</a></Tag></li>
                                                    <li><Tag style={{ marginTop: '20px' }}><a href="/">Sketch</a></Tag></li>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <div className="">
                                    <Col span={6}>
                                        <div className="filters-sidebar-inner">
                                            <div className="signUpArea">
                                                <img src={timeTrackerLogo} className='timetrackerlogo' alt='timetracker_logoImage' />
                                                <h4 style={{ fontSize: '18px' }}>Track time on Hubstaff</h4>
                                                <div class="hs-lead">Pay only for the hours worked</div>
                                                <a className="btn btn-primary btn-130" href="https://talent.hubstaff.com/signup?message=" target="">Sign Up</a>
                                                <a className="textInSignUp" href="/" target="">Learn more...</a>
                                            </div>
                                            <div className="sidebar-section">
                                                <h5 className="section-subtitle-right from-sidebar">
                                                    <span className="pull-left">Top jobs</span>
                                                </h5>
                                                <ul className="list-unstyled">
                                                    <li className="sidebar-job">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <a className="name" href="/">Senior Ruby on Rails Engineer</a>
                                                            </div>
                                                            <div className="col-sm-4 text-right">
                                                                <div className="pay-rate">60$/hr</div>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                                            </div>
                                                    </li>
                                                    <li className="sidebar-job">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <a className="name" href="/">Senior Product Designer </a>
                                                            </div>
                                                            <div className="col-sm-4 text-right">
                                                                <div className="pay-rate">45$/hr</div>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                                            </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-section">
                                                <h5 className="section-subtitle-right from-sidebar">
                                                    <span className="pull-left">Most Viewed this Week</span>
                                                </h5>
                                                <ul className="list-unstyled">
                                                    <li className="sidebar-job">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <a className="name" href="/">Senior Ruby on Rails Engineer</a>
                                                            </div>
                                                            <div className="col-sm-4 text-right">
                                                                <div className="pay-rate">60$/hr</div>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                                            </div>
                                                    </li>
                                                    <li className="sidebar-job">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <a className="name" href="/">Senior Product Designer </a>
                                                            </div>
                                                            <div className="col-sm-4 text-right">
                                                                <div className="pay-rate">45$/hr</div>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                                            </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </div>
                        <div className="pagination-container">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                        <Footer>
                            <div className="container">Data to be populated soon.</div>
                        </Footer>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default HomePage;