import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import ContentSection from '../components/ContentSection';
import FooterComponent from '../components/FooterComponent';

class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    onChange = (value) => {
        this.setState({ minValue: value[0], maxValue: value[1] })
    }

    render() {
        return (
            <div>
                <Layout className="layout">
                    <HeaderComponent />
                    <ContentSection />
                    <FooterComponent />
                </Layout>
            </div>
        );
    }
}

export default HomePage;