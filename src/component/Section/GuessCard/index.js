import React, { Component } from 'react';
import { Card } from 'antd';
import { tabList, contentList } from './index.jsx';
import './index.css';

class GuessCard extends Component {
	state = {
		loveKey: 'love',
	}
	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({[type]: key});
	}
	render() {
		return(
			<div className="guess_container">
		        <Card
		          style={{ width: '100%' }}
		          tabList={tabList}
		          title="猜你喜欢"
		          activeTabKey={this.state.noTitleKey}
		          onTabChange={(key) => { this.onTabChange(key, 'loveKey'); }}
		        >
		          {contentList[this.state.loveKey]}
		        </Card>
	        </div>
		)
	}
}
export default GuessCard;