import React, { Component } from 'react';
import { Dropdown, Icon, Input } from 'antd';
import Login from './Login';
import { myMeituan,businessCenter } from './index.jsx';
import LogoImg from '../../images/logo.png';
import CommitImg1 from '../../images/commit01.png';
import CommitImg2 from '../../images/commit02.png';
import CommitImg3 from '../../images/commit03.png';
import './index.css'

const Search = Input.Search;

class Header extends Component {

	state = {
		visible: false,
		confirmLoading: false,
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	}

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		setTimeout(() => {
			this.setState({
				visible: false,
				confirmLoading: false,
			});
		},2000);
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}

	render() {
		return(
	        <div className="header_container">
	          <div className="header_bar">
	            <div className="header_bar_flex">
	              <div className="header_bar_left">
	                  <span className="header_location">
	                    <Icon type="environment-o"/>北京<span><a href="/City">切换城市</a></span>
	                  </span>
	                  <span className="guess_city">
	                  [<a>大厂回族自治县</a><a>廊坊</a><a>三河</a>]
	                  </span>
	                <span className="user_entry"><a onClick={ this.showModal }>立即登录</a><span><a>注册</a></span></span>
	                <Login visible={ this.state.visible }
						  handleOk={ this.handleOk }
						  confirmLoading={ this.state.confirmLoading }
						  handleCancel={ this.handleCancel } />
	              </div>
	              <div className="header_bar_right">
	              	<Dropdown overlay={myMeituan}>
						<a className="" href="http://localhost:5020/">我的美团</a>
					</Dropdown>
					<span><a href="/Downloads">手机APP</a></span>
					<Dropdown overlay={ businessCenter }>
						<a href="">商家中心</a>
					</Dropdown>
					<span>网站导航</span>
	              </div>
	            </div>
	          </div>
	          <div className="header_content">
	          	<div className="header_main">
	          		<div className="header_logo">
	          			<img src={ LogoImg } alt="LogoImg"/>
	          		</div>
	          		<div className="header_search">
	      			    <Search placeholder="搜索商家或地点" 
	      			    onSearch={value => console.log(value)}
	      			    size="large"
	      			    enterButton />
	      			    <p><a>故宫博物院</a><a>北京欢乐谷</a><a>八达岭长城</a>
	      			    <a>北京野生动物园</a><a>圆明园</a><a>呀热古热带植物园</a></p>
	          		</div>
	          		<div className="header_commitment">
	          			<ul>
		          			<li><img src={ CommitImg1 } alt="CommitImg1"/><p>随时退</p></li>
		          			<li><img src={ CommitImg2 } alt="CommitImg2"/><p>不满意免单</p></li>
		          			<li><img src={ CommitImg3 } alt="CommitImg3"/><p>过期退</p></li>
	          			</ul>
	          		</div>
	          	</div>
	            <div className="header_nav">
	            	<div className="header_home">
	            		<div className="header_link">
		            		<a className="takeout_apartment">美团外卖</a>
		            		<a className="movie_hotel">猫眼电影</a>
		            		<a className="movie_hotel">美团酒店<span className="nav_promotion"> 推荐 </span></a>
		            		<a className="takeout_apartment">民宿/公寓</a>
		            		<a className="business">商家入驻</a>
	            		</div>
	            	</div>
	            </div>
	          </div>
	        </div>
		)
	}
}
export default Header;