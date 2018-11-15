import React from 'react';
import { Input} from 'antd';

const Search = Input.Search;

class SearchBarComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Search
                    placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    className="searchBar"
                />
            </div>
        )
    }
}

export default SearchBarComponent;