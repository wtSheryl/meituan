import React, { Component } from 'react';
import { Card } from 'antd';
import { tabList, contentList } from './index.jsx';
import './index.css';

class MoviesCard extends Component {
	state = {
		firstKey: 'reying',
	}
	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({[type]: key});
	}
	render() {
		return(
			<div className="movies_container">
		        <Card
		          style={{ width: '100%' }}
		          tabList={tabList}
		          title="猫眼电影"
		          extra={<a href="">全部 ></a>}
		          activeTabKey={this.state.noTitleKey}
		          onTabChange={(key) => { this.onTabChange(key, 'firstKey'); }}
		        >
		          {contentList[this.state.firstKey]}
		        </Card>
	        </div>
		)
	}
}
export default MoviesCard;