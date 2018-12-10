import React, { Component } from 'react';
import Detail from './detail.js'

class CategoryFood extends Component {
	render() {
		return(
		<div>
			<div className="categories_title_wrapper"><h2>{this.props.myDataProp}</h2><a>更多></a></div>
			<div className="categories_content_wrapper">
				<ul>
					{
						<Detail dataDetail={this.props.dataDetail}/>
					}
				</ul>
			</div>
		</div>
		)
	}
}
export default CategoryFood;