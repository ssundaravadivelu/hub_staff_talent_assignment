import React from 'react';
import { Col, Select, Tag } from 'antd';
import ResultDataComponent from '../components/ResultDataComponent';

class SearchResultsComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        const Option = Select.Option;
        return (
            <div>
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
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                            <ResultDataComponent />
                        </div>
                    </div>
                </Col>
            </div>
        )
    }
}

export default SearchResultsComponent;