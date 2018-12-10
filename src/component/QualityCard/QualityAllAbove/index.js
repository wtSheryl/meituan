import React, { Component } from 'react';
import { Card } from 'antd';
import QualityImg01 from '../../../images/quality01.jpg';
import QualityImg02 from '../../../images/quality02.jpg';
import QualityImg03 from '../../../images/quality03.jpg';
import QualityImg04 from '../../../images/quality04.jpg';
import QualityImg05 from '../../../images/quality05.jpg';
import QualityImg06 from '../../../images/quality06.jpg';
import './index.css';
const { Meta } = Card

class QualityAllAbove extends Component {
	render() {
		return(
			<div className="quality_panel">
				<div className="quality_detail_container">
					
					  <Card
					    hoverable
					    cover={<img alt="QualityImg01" src={ QualityImg01 } />}
					  >
					    <Meta
					      title="泽艺影城"
					      description="免押金，儿童票，杜比全景声厅，巨幕厅，60帧厅"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥29.9  </span> 
						    <em>门市价￥59.9</em></p>
						    <p>世纪天阶</p>
					    </div>
					  </Card>
				</div>
				<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="QualityImg02" src={ QualityImg02 } />}
					  >
					    <Meta
					      title="博士皮肤美容中心"
					      description="免费WIFI，医学美容"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥999  </span> 
						    <em>门市价￥1999</em></p>
						    <p>中关村</p>
					    </div>
					  </Card>
				</div>	  
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="QualityImg01" src={ QualityImg03 } />}
					  >
					    <Meta
					      title="幸福蛋糕园"
					      description="600克花开陌上蛋糕冰淇淋一份"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥108  </span> 
						    <em>门市价￥152</em></p>
						    <p>右安门</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="QualityImg04" src={ QualityImg04 } />}
					  >
					    <Meta
					      title="SFC上影影城（大兴龙湖IMAX店）"
					      description="可停车，儿童票，IMAX厅，60帧厅"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥39  </span> 
						    <em>门市价￥89</em></p>
						    <p>北苑家园</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="QualityImg05" src={ QualityImg05 } />}
					  >
					    <Meta
					      title="臻美私人订制"
					      description="臻美私人订制"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥69.9  </span> 
						    <em>门市价￥109</em></p>
						    <p>海淀区</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="QualityImg06" src={ QualityImg06 } />}
					  >
					    <Meta
					      title="串通cLub（十里堡店）"
					      description="串通浪漫双人餐，提供免费WIFI"
					    />
					    <div className="quality_detail_price">
						    <p className="price"><span>￥108  </span> 
						    <em>门市价￥152</em></p>
						    <p>朝阳大悦城</p>
					    </div>
					  </Card>
			  	</div>
			</div>
		)
	}
}
export default QualityAllAbove;