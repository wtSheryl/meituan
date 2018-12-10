import React, { Component } from 'react';
import { Carousel } from 'antd';
import CarouselImg01 from '../../images/carousel01.jpg';
import CarouselImg02 from '../../images/carousel02.jpg';
import CarouselImg03 from '../../images/carousel03.jpg';
import CarouselImg04 from '../../images/carousel04.jpg';
import CarouselImg05 from '../../images/carousel05.jpg';
import CarouselImg06 from '../../images/carousel06.jpg';
import './index.css';

class CarouselHr extends Component {
	render() {
		return(
			<div className="banner_carousel">
				<Carousel autoplay effect="fade">
				    <div><img src={ CarouselImg01 } alt="CarouselImg01"/></div>
				    <div><img src={ CarouselImg02 } alt="CarouselImg02"/></div>
				    <div><img src={ CarouselImg03 } alt="CarouselImg03"/></div>
				    <div><img src={ CarouselImg04 } alt="CarouselImg04"/></div>
				    <div><img src={ CarouselImg05 } alt="CarouselImg05"/></div>
				    <div><img src={ CarouselImg06 } alt="CarouselImg06"/></div>
				</Carousel>
			</div>
		)
	}
}
export default CarouselHr;