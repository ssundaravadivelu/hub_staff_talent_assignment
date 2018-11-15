import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Footer>
                    <div className="container">Data to be populated soon.</div>
                </Footer>
            </div>
        );
    }
}

export default FooterComponent;