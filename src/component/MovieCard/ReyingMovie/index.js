import React, { Component } from 'react';
import { Carousel} from 'antd';
import movieImg01 from './movieImage/movieImg01.jpg';
import movieImg02 from './movieImage/movieImg02.jpg';
import movieImg03 from './movieImage/movieImg03.jpg';
import movieImg04 from './movieImage/movieImg04.jpg';
import movieImg05 from './movieImage/movieImg05.jpg';
import movieImg06 from './movieImage/movieImg06.jpg';
import movieImg07 from './movieImage/movieImg07.jpg';
import movieImg08 from './movieImage/movieImg08.jpg';
import movieImg09 from './movieImage/movieImg09.jpg';
import movieImg10 from './movieImage/movieImg10.jpg';
import './index.css';

class ReyingMovie extends Component {
	render() {
		return(
			<div className="movie_first_panel">
				<Carousel>
				    <div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg01 } alt="movieImg01"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>狂暴巨兽</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg02 } alt="movieImg02"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>头号玩家</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg03 } alt="movieImg03"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>后来的我们</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg04 } alt="movieImg04"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>犬之岛</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg05 } alt="movieImg05"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>21克拉</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    </div>
				    <div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg06 } alt="movieImg06"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>幕后玩家</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg07 } alt="movieImg07"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>脱单告急</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg08 } alt="movieImg08"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>战神纪</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg09 } alt="movieImg09"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>8.4</span></p>
					    		<div className="movie_info_name"><em>复仇者联盟3</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    	<div className="movie_detail_container">
				    		<img src={ movieImg10 } alt="movieImg10"/>
				    		<div className="movie_info">
					    		<p>观众评  <span>9</span></p>
					    		<div className="movie_info_name"><em>湮灭</em> <span>&nbsp;&nbsp;购票&nbsp;&nbsp;</span></div>
				    		</div>
				    	</div>
				    </div>
				</Carousel>
			</div>
		)
	}
}
export default ReyingMovie;