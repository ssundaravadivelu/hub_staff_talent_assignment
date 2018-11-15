import React from 'react';
import { Tag } from 'antd';

class ResultDataComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        return (
            <div className="main-details">
                <a href='/' className="name margin-right-10">Senior PHP Developer</a>
                <Tag color="#56d48f">hourly</Tag>
                <div className="content-pay-rate">$44/hr</div>
                <div className="job-company">
                    <a className="is-inline-block job-agency margin-right-20" target="" href="http://tutortroops.com"><i class="hi hi-agency" title="Client"></i> Tutor Tropps</a>
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
        )
    }
}

export default ResultDataComponent;