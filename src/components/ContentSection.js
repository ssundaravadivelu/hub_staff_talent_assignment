import React from 'react';
import { Layout,Pagination } from 'antd';
import SearchBarComponent from '../components/SearchBarComponent';
import DataComponent from '../components/DataComponent';

const { Content } = Layout;


class ContentSection extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Content>
                    <div className="container">
                        <SearchBarComponent />
                        <DataComponent />
                    </div>
                    <div className="pagination-container">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </Content>
            </div>
        );
    }
}

export default ContentSection;