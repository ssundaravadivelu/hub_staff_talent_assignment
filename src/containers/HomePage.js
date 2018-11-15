import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import ContentSection from '../components/ContentSection';

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
        const pageTitle = "Home Page";
        return (
            <div>
                <Layout className="layout">
                    <HeaderComponent />
                    <ContentSection />
                </Layout>
            </div>
        );
    }
}

export default HomePage;