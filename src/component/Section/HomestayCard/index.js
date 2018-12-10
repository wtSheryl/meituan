import React, { Component } from 'react';
import { Card } from 'antd';
import { tabList, contentList } from './index.jsx';
import './index.css';

class HomestayCard extends Component {
	state = {
		firstKey: 'jinan',
	}
	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({[type]: key});
	}
	render() {
		return(
			<div className="homestay_container">
		        <Card
		          style={{ width: '100%' }}
		          tabList={tabList}
		          title="推荐民宿"
		          activeTabKey={this.state.noTitleKey}
		          onTabChange={(key) => { this.onTabChange(key, 'firstKey'); }}
		        >
		          {contentList[this.state.firstKey]}
		        </Card>
	        </div>
		)
	}
}
export default HomestayCard;