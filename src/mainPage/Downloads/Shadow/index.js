import React, { Component } from 'react';
import { Icon, Divider } from 'antd';
import Qrcode from './images/qrcode_v2.png';
import './index.css';

export default class Shadow extends Component {

	handleCloseClick = () => {
		this.props.handleIconClick();
	}


	render() {
		return(
			<div className="mainShadow" style={{ display: this.props.displayState}}>
				<div className="shadow_content">
					<Icon type="close-circle" onClick={this.handleCloseClick} className="shadow_close"/>
					<div className="devices_wrapper">
						<div className="device_container"
						style={{backgroundImage: this.props.initBackgroundState0}}
						onMouseOver={this.props.handMouseEnter.bind(this,'android')}></div>
						<div className="device_container" 
						style={{backgroundImage: this.props.initBackgroundState1}}
						onMouseOver={this.props.handMouseEnter.bind(this,'iphone')}></div>
						<div className="device_container" 
						style={{backgroundImage: this.props.initBackgroundState2}}
						onMouseOver={this.props.handMouseEnter.bind(this,'ipad')}></div>
						<div className="device_container" 
						style={{backgroundImage: this.props.initBackgroundState3}}
						onMouseOver={this.props.handMouseEnter.bind(this,'windows')}></div>
					</div>
					<div className="downloads_wrapper">
						<div className="downloads_wrapper_left">
							<div className="downloads_left_qrcode">
								<img src={Qrcode} alt="Qrcode"/>
							</div>
							<p>手机扫描二维码下载</p>
						</div>
						<div className="downloads_wrapper_right">
							<div className="downloads_right_area">
								<p>{this.props.downloadMethod}</p>
								<button className="downloads_button"><Icon type={this.props.iconType}/>{this.props.buttonText}</button>
								&nbsp;&nbsp;<button className="downloads_button" style={{display: this.props.WIN8dispaly }}><Icon type="tablet"/>WIN8平板</button>
								<Divider dashed/>
								<p>手机浏览器访问meituan.com/d即可下载</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}