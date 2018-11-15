import React from 'react';
import { Row, Col, Select} from 'antd';
import SideBarSectionComponent from '../components/SideBarSectionComponent';
import SearchResultsComponent from '../components/SearchResultsComponent';
import RightSideBarComponent from '../components/RightSideBarComponent';

class DataComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    render() {
        const Option = Select.Option;
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Row>
                    <SideBarSectionComponent />
                    <SearchResultsComponent />
                    <RightSideBarComponent />
                </Row>
            </div>
        )
    }
}

export default DataComponent;