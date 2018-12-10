import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import HomestayImg01 from './homestayImage/homestayImg01.jpg';
import HomestayImg02 from './homestayImage/homestayImg02.jpg';
import HomestayImg03 from './homestayImage/homestayImg03.jpg';
import HomestayImg04 from './homestayImage/homestayImg04.jpg';
import HomestayImg05 from './homestayImage/homestayImg05.jpg';
import HomestayImg06 from './homestayImage/homestayImg06.jpg';
import HomestayHead01 from './homestayImage/homestayhead01.jpg';
import HomestayHead02 from './homestayImage/homestayhead02.jpg';
import HomestayHead03 from './homestayImage/homestayhead03.jpg';
import HomestayHead04 from './homestayImage/homestayhead04.jpg';
import HomestayHead05 from './homestayImage/homestayhead05.jpg';
import HomestayHead06 from './homestayImage/homestayhead06.jpg';
import './index.css';

const Meta = Card.Meta;

class HomestayCity extends Component {
	render() {
		return(
			<div className="quality_panel">
				<div className="quality_detail_container">
					
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg01" src={ HomestayImg01 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead01 } />}
					      title="万达旁1.5公里北欧情怀民宿"
					      description="整套2居室·可住6人 | 长城路"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥278</span>
					    </div>
					  </Card>
				</div>
				<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg02" src={ HomestayImg02 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead02 } />}
					      title="泰山脚下长城路港式精装两居精品"
					      description="整套2居室·可住4人 | 长城路"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥269</span>
					    </div>
					  </Card>
				</div>	  
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg03" src={ HomestayImg03 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead03 } />}
					      title="泰山脚下观景舒适精品两居"
					      description="整套2居室·可住4人 | 长城路"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥299</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg04" src={ HomestayImg04 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead04 } />}
					      title="小猪佩奇社会人家庭房（万达广场）"
					      description="整套1居室·可住4人 | 万达广场东区"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥178</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg05" src={ HomestayImg05 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead05 } />}
					      title="致青春主题房（万达广场）"
					      description="整套1居室·可住2人 | 万达广场东区"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥128</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="quality_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="HomestayImg06" src={ HomestayImg06 } />}
					  >
					    <Meta
					      avatar={<Avatar src={ HomestayHead06 } />}
					      title="致臻精品民宿——泰山世纪广场“浓妆”"
					      description="整套2居室·可住4人 | 岱岳区"
					    />
					    <div className="quality_detail_price">
						    <span className="homestay_price">￥189</span>
					    </div>
					  </Card>
			  	</div>
			</div>
		)
	}
}
export default HomestayCity;