import React, { Component } from 'react';
import { Icon } from 'antd';
import CarouselHr from '../../component/CarouselHr'
import LeisionImg from '../../images/leision.jpg';
import HotelImg from '../../images/hotel.png';
import StudyImg from '../../images/study.jpg';
import BusinessImg from '../../images/business.jpg';
import QrcodeImg from '../../images/qrcode.jpg';
import DefaultAvatar from '../../images/defaultavatar.png';
import CategoryFood from './CategoryFood';
import QualityCard from './QualityCard';
import DiscountsCard from './DiscountsCard';
import MoviesCard from './MoviesCard';
import HomestayCard from './HomestayCard';
import GuessCard from './GuessCard';
import './index.css';

class Section extends Component {
	constructor(props) {
		super(props)
		this.state = {
		display: "none",
		title: "",
		category:"delicious",
		}
	}

	onMouseEnter = (index, detail) => {
		this.setState({
			display: "block",
			title: index,
			category: detail,
		});
	}

	onMouseLeave = (detail) => {
		this.setState({
			display: "none",
			category: detail,
		});
	}

	render() {
		var categories_map = [
		{"keyname":"delicious","typename":"coffee","categories":"美食"},
		{"keyname":"takeout","typename":"inbox","categories":"外卖"},
		{"keyname":"hotel","typename":"shop","categories":"酒店"},
		{"keyname":"hotcity","typename":"home","categories":"榛果民宿"},
		{"keyname":"movies","typename":"eye-o","categories":"猫眼电影"},
		{"keyname":"tickets","typename":"credit-card","categories":"机票/火车票"},
		{"keyname":"entertainment","typename":"notification","categories":"休闲娱乐/KTV"},
		{"keyname":"services","typename":"appstore","categories":"生活服务"},
		{"keyname":"beauties","typename":"smile-o","categories":"丽人/美发/医学美容"},
		{"keyname":"wedding","typename":"camera-o","categories":"结婚/婚纱摄影/婚宴"},
		{"keyname":"children","typename":"team","categories":"亲子/儿童乐园/幼教"},
		{"keyname":"aerobial","typename":"environment-o","categories":"运动健身/健身中心"},
		{"keyname":"design","typename":"compass","categories":"家装/建材/家居"},
		{"keyname":"study","typename":"calculator","categories":"学习培训/音乐培训/KTV"},
		{"keyname":"healthy","typename":"medicine-box","categories":"医疗健康/宠物/爱车"},
		{"keyname":"fun","typename":"trophy","categories":"酒吧/密室逃脱"}];
		return(
	        <section className="section_container">
	        	<div className="section_main">
	        		<div className="section_banner">
	        			<div className="left_banner">
	        				<h3>全部分类</h3>
	        				<div className="categories">
	        					<ul >

	        					{
									categories_map.map(function(data){
										return (<li key={data.keyname} onMouseOut={this.onMouseLeave.bind(this,data.keyname)} onMouseOver={this.onMouseEnter.bind(this,data.categories,data.keyname)}><span><Icon type={data.typename} />{ data.categories }</span><Icon type="right" /></li>)
									},this)
								}

	        					</ul>
	        				</div>
	        				<div  onMouseOut={this.onMouseLeave.bind(this,this.state.category)} onMouseOver={this.onMouseEnter.bind(this,this.state.title,this.state.category)}
	        				style={{ display: this.state.display }} className="categories_detail_wrapper">
	        					<CategoryFood myDataProp = {this.state.title} 
	        						dataDetail = {this.state.category}
	        					/>
	        				</div>
	        			</div>
	        			
	        			<div className="right_banner"><u></u>
	        				<div className="banner_top_row">
        						<u></u><CarouselHr />
        						<div className="banner_leision">
        							<img src={ LeisionImg } alt="LeisionImg"/>
        						</div>
								<div className="banner_login">
									<div className="banner_avatar"><div><img src={ DefaultAvatar } alt="DefaultAvatar"/></div></div>
									<h3>Hi! 你好</h3>
									<div className="banner_button"><button>注册</button></div>
									<div className="banner_button"><button>立即登录</button></div>
								</div>
	        				</div>
	        				<div className="banner_bottom_row">
	        					<u></u>
	        					<div className="banner_hotel_study">
	        						<img src={ HotelImg } alt="HotelImg"/>
	        					</div>
	        					<div className="banner_hotel_study">
	        						<img src={ StudyImg } alt="StudyImg"/>
	        					</div>
	        					<div className="banner_business">
	        						<img src={ BusinessImg } alt="BusinessImg"/>
	        					</div>
	        					<div className="banner_qrcode">
	        						<img src={ QrcodeImg } alt="QrcodeImg"/>
	        						<h3>美团APP手机版</h3>
	        						<p><span>1元起</span>  吃喝玩乐</p>
	        					</div>
	        				</div>
	        			</div>
	        		</div>
	        		<div className="scenes_container">
	        			<QualityCard />
	        			<DiscountsCard />
	        			<MoviesCard />
	        			<HomestayCard />
	        			<GuessCard />
	        		</div>
	        	</div>
	        </section>
		)
	}
}
export default Section;