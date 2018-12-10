import React, { Component } from 'react';
import { Carousel, Button, Icon } from 'antd';
import Title from '../../images/downloads/title_meituan.png';
import Qrcode from './Shadow/images/qrcode_v2.png';
import Shadow from './Shadow';
import AndroidS from './Shadow/images/android_selected.png';
import iPhoneS from './Shadow/images/iphone_selected.png';
import iPadS from './Shadow/images/ipad_selected.png';
import WindowsS from './Shadow/images/windows_selected.png';
import Android from './Shadow/images/android.png';
import iPhone from './Shadow/images/iphone.png';
import iPad from './Shadow/images/ipad.png';
import Windows from './Shadow/images/windows.png';
import {SectionsContainer, Section, Header } from 'react-fullpage';
import './index.css';

export default class Downloads extends Component {
	state = {
		display: 'none',
		initBackground0: 'url('+ Android +')',
		initBackground1: 'url('+ iPhone +')',
		initBackground2: 'url('+ iPad +')',
		initBackground3: 'url('+ Windows +')',
		downloadmethod: '电脑直接下载',
		icon: 'android',
		buttontext: 'Android手机',
		WIN8dispaly: 'none',
		attentiondisplay: 'none',
	}
	handleAnimation = (current) => {
		console.log(current);
	}
	handleMenuClick = (keyword) => {
		console.log("menusdfsfds===>"+keyword)
		this.setState({
			display: 'block',
		})
		if(keyword==='android') {
			this.setState({
				initBackground0: 'url('+ AndroidS +')',
				initBackground1: 'url('+ iPhone +')',
				initBackground2: 'url('+ iPad +')',
				initBackground3: 'url('+ Windows +')',
				downloadmethod: '电脑直接下载',
				icon: 'android',
				buttontext: 'Android手机',
				WIN8dispaly: 'none',
			})
		}
		if(keyword==='iphone') {
			this.setState({
				initBackground0: 'url('+ Android +')',
				initBackground1: 'url('+ iPhoneS +')',
				initBackground2: 'url('+ iPad +')',
				initBackground3: 'url('+ Windows +')',
				downloadmethod: '访问商店下载',
				icon: 'apple',
				buttontext: 'App Store下载',
				WIN8dispaly: 'none',
			})
		}
		if(keyword==='ipad') {
			this.setState({
				initBackground0: 'url('+ Android +')',
				initBackground1: 'url('+ iPhone +')',
				initBackground2: 'url('+ iPadS +')',
				initBackground3: 'url('+ Windows +')',
				downloadmethod: '访问商店下载',
				icon: 'apple',
				buttontext: 'App Store下载',
				WIN8dispaly: 'none',
			})
		}
		if(keyword==='windows') {
			this.setState({
				initBackground0: 'url('+ Android +')',
				initBackground1: 'url('+ iPhone +')',
				initBackground2: 'url('+ iPad +')',
				initBackground3: 'url('+ WindowsS +')',
				downloadmethod: '访问商店下载',
				icon: 'android',
				buttontext: 'WP8手机',
				WIN8dispaly: 'inline-block',
			})
		}
	}
	handleAttention = () => {
		this.setState({
			attentiondisplay: 'block',
		})
	}
	handleClick = () => {
		this.setState({
			display: 'none',
			attentiondisplay: 'none',
		})
	}

	render() {
		    let options = {
		      sectionClassName:     'section',
		      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree','sectionFour'],
		      scrollBar:            false,
		      navigation:           true,
		      verticalAlign:        false,
		      sectionPaddingTop:    '0px',
		      sectionPaddingBottom: '0px',
		      arrowNavigation:      true
		    };
		return(
			<div className="downloads_container">
				<Header>
					<div className="download_attention" style={{ display: this.state.attentiondisplay }}>
						<span>手机浏览器访问meituan.com，无需安装，立刻访问美团</span>
						<Icon type="close" className="attention_close" onClick={ this.handleClick }/>
					</div>
					<div className="downloads_qrcode">
						<img src={ Qrcode } alt="Qrcode" />
						<Button type="primary" size="large">立即下载<Icon type="right-circle-o" /></Button>
					</div>
					<div className="downloads_header_nav">	
						<div className="downloads_title">
							<img src={ Title } alt="Title" />	
						</div>
						<div className="downloads_menu">
							<span onClick={ this.handleMenuClick.bind(this,'android') }>Android</span>
							<span onClick={ this.handleMenuClick.bind(this,'iphone') }>iPhone</span>
							<span onClick={ this.handleMenuClick.bind(this,'ipad') }>iPad</span>
							<span onClick={ this.handleMenuClick.bind(this,'windows') }>WP8\WIN8</span>
							<span onClick={ this.handleAttention }>手机网页版</span>
						</div>
					</div>
				</Header>	
				<SectionsContainer {...options}>
				    <Section>
				    	<div className="downloads_first">
			        		<div className="downloads_carousel_container">
			      				<div className="downloads_main_left">
					      			<div className="downloads_iphone"></div>
					      			<div className="downloads_circle"></div>
					      			<div className="downloads_wheel01"></div>
					      			<div className="downloads_wheel02"></div>
					      			<div className="downloads_wheel03"></div>
					      			<div className="downloads_wheel04"></div>
			      				</div>
			      				<div className="downloads_main_right"></div>
			      			</div>
			      		</div>
				    </Section>
				    <Section>
						<div className="downloads_second">
					        <div className="downloads_carousel_container">
					      		<div className="downloads_main_left">
					      			<div className="downloads_cloud"></div>
					      			<div className="downloads_map"></div>
					      			<div className="downloads_nail"></div>
					      		</div>
					      	</div>
					    </div>
				    </Section>
				    <Section>
						<div className="downloads_third">
					        <div className="downloads_carousel_container">
					      		<div className="downloads_main_left">
					      			<div className="downloads_phonelay"></div>
					      			<div className="downloads_shop"></div>
					      			<div className="downloads_fun"></div>
					      		</div>
					      	</div>
					    </div>
				    </Section>
				    <Section>
						<div className="downloads_fourth">
					        <div className="downloads_carousel_container">
					      		<div className="downloads_main_left">
					      			<div className="downloads_phoneopen"></div>
					      			<div className="downloads_phoneclose"></div>
					      			<div className="downloads_giftleft"></div>
					      			<div className="downloads_giftright"></div>
					      			<div className="downloads_ballon"></div>
					      		</div>
					      	</div>
					    </div>
				    </Section>
				</SectionsContainer>
				<Shadow displayState={ this.state.display } 
			    initBackgroundState0={ this.state.initBackground0 }
			    initBackgroundState1={ this.state.initBackground1 }
			    initBackgroundState2={ this.state.initBackground2 }
			    initBackgroundState3={ this.state.initBackground3 }
			    downloadMethod={ this.state.downloadmethod }
				iconType={ this.state.icon }
				buttonText={ this.state.buttontext }
				WIN8dispaly={ this.state.WIN8dispaly }
			    handleIconClick={ this.handleClick } 
			    handMouseEnter={ this.handleMenuClick }/>
			</div>
		)
	}
}