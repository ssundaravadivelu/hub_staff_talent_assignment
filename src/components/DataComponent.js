import React from 'react';
import { Row, Select } from 'antd';
import SideBarSectionComponent from '../components/SideBarSectionComponent';
import SearchResultsComponent from '../components/SearchResultsComponent';
import RightSideBarComponent from '../components/RightSideBarComponent';
import * as searchActions from '../actions/searchActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DataComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.actions.getAllDetails();
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
                    <SearchResultsComponent searchResult={this.props.searchResult} />
                    <RightSideBarComponent />
                </Row>
            </div>
        )
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        searchResult: state.searchReducer && state.searchReducer.searchAll ? state.searchReducer.searchAll : []
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...searchActions}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);