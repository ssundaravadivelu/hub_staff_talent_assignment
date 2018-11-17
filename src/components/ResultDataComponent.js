import React from 'react';
import { Tag } from 'antd';
import Item from 'antd/lib/list/Item';

class ResultDataComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            backgroundColor: {'Part Time': '#f5ad41', 'Full Time': '#55a8fd', 'Hourly': '#56d48f' }
        };
    }
    render() {
        return (
            <div className="main-details">
                <a href='/' className="name margin-right-10">{this.props.data.title}</a>
                <Tag color={this.state.backgroundColor[this.props.data.jobType]}>{this.props.data.jobType}</Tag>
                <div className="content-pay-rate">$44/hr</div>
                <div className="job-company">
                    <div style={{float:'left',clear:'left'}}>
                        <a className="is-inline-block job-agency margin-right-20" target="" href="http://tutortroops.com"><i className="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                        <span className="location text-success margin-right-20">
                            <i class="hi hi-pin" title="From"></i>
                            {this.props.data.location}
                        </span>
                    </div>

                    <span style={{ fontWeight: 500,float:'left',clear:'left' }}>Reply rate: 82%</span>
                </div>
                <div className="profil-bio push-bottom-10">
                    {this.props.data.desciption}
                </div>
                <div className="list-inline push-bottom-20">
                {
                    this.props.data.requiredSkills && this.props.data.requiredSkills.split(',').map((skill) =>
                    <li><Tag style={{ marginTop: '20px' }}><a href="/">{skill.trim()}</a></Tag></li>
                )
                }
                </div>
            </div>
        )
    }
}

export default ResultDataComponent;