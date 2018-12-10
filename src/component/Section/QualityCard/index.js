import React, { Component } from 'react';
import { Card } from 'antd';
import { tabListNoTitle, contentListNoTitle } from './index.jsx';
import './index.css';

class QualityCard extends Component {
	state = {
		noTitleKey: 'allabove',
	}

	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({[type]: key});
	}
	render() {
		return (
			<div className="quality_container">
		        <Card
		          style={{ width: '100%' }}
		          tabList={tabListNoTitle}
		          title="有格调"
		          activeTabKey={this.state.noTitleKey}
		          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
		        >
		          {contentListNoTitle[this.state.noTitleKey]}
		        </Card>
	        </div>
		)
	}
}
export default QualityCard;