import React, { Component } from 'react';
import { Card, Rate } from 'antd';
import GuessImg01 from './guessImage/guess01.jpg';
import GuessImg02 from './guessImage/guess02.jpg';
import GuessImg03 from './guessImage/guess03.jpg';
import GuessImg04 from './guessImage/guess04.jpg';
import GuessImg05 from './guessImage/guess05.jpg';
import GuessImg06 from './guessImage/guess06.jpg';
import GuessImg07 from './guessImage/guess07.jpg';
import GuessImg08 from './guessImage/guess08.jpg';
import GuessImg09 from './guessImage/guess09.jpg';
import GuessImg10 from './guessImage/guess10.jpg';
import GuessImg11 from './guessImage/guess11.jpg';
import GuessImg12 from './guessImage/guess12.jpg';
import GuessImg13 from './guessImage/guess13.jpg';
import GuessImg14 from './guessImage/guess14.jpg';
import GuessImg15 from './guessImage/guess15.jpg';
import './index.css'

const Meta = Card.Meta;

class Suitable extends Component {
	render() {
		return(
			<div className="discount_panel">
				<div className="discount_detail_container">
					
					  <Card
					    hoverable
					    cover={<img alt="GuessImg01" src={ GuessImg01 } />}
					  >
					    <Meta
					      title="铁木真烤肉自助城（西三旗店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4.5} />
					    <span className="ant-rate-text"> 530个评价</span>
					    <div className="guess_detail_price">
					    	<p>回龙观</p>
						    <span className="desc">￥</span><em className="price">64.9 </em><span className="desc">起</span>
					    </div>
					  </Card>
				</div>
				<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg02" src={ GuessImg02 } />}
					  >
					    <Meta
					      title="鼎鼎轩烤肉自助餐厅（马驹桥店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4.5} />
					    <span className="ant-rate-text"> 11093个评价</span>
					    <div className="guess_detail_price">
					    	<p>马驹桥</p>
						    <span className="desc">￥</span><em className="price">56.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
				</div>	  
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg03" src={ GuessImg03 } />}
					  >
					    <Meta
					      title="宏状元（花园北路店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4.5} />
					    <span className="ant-rate-text"> 145个评价</span>
					    <div className="guess_detail_price">
					    	<p>牡丹园/北太平庄</p>
						    <span className="desc">￥</span><em className="price">35.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg04" src={ GuessImg04 } />}
					  >
					    <Meta
					      title="豫香缘黄焖鸡米饭"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4.5} />
					    <span className="ant-rate-text"> 5632个评价</span>
					    <div className="guess_detail_price">
					    	<p>学院路</p>
						    <span className="desc">￥</span><em className="price">64.9 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg05" src={ GuessImg05 } />}
					  >
					    <Meta
					      title="丁丁洋回转自助火锅（太阳岛物美店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4} />
					    <span className="ant-rate-text"> 5471个评价</span>
					    <div className="guess_detail_price">
					    	<p>古城八角</p>
						    <span className="desc">￥</span><em className="price">39.9 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg06" src={ GuessImg06 } />}
					  >
					    <Meta
					      title="绝味鸭脖（北京站东店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4} />
					    <span className="ant-rate-text"> 18个评价</span>
					    <div className="guess_detail_price">
					    	<p>建国门/北京站</p>
						    <span className="desc">￥</span><em className="price">45.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg07" src={ GuessImg07 } />}
					  >
					    <Meta
					      title="老诚一锅（菜市口店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={3} />
					    <span className="ant-rate-text"> 177个评价</span>
					    <div className="guess_detail_price">
					    	<p>菜市口/陶然亭</p>
						    <span className="desc">￥</span><em className="price">90.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg08" src={ GuessImg08 } />}
					  >
					    <Meta
					      title="豪尚豪牛排馆（旺角购物湖光北街店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4} />
					    <span className="ant-rate-text"> 1816个评价</span>
					    <div className="guess_detail_price">
					    	<p>望京</p>
						    <span className="desc">￥</span><em className="price">138.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg09" src={ GuessImg09 } />}
					  >
					    <Meta
					      title="大渔铁板烧（欧美汇购物中心店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4} />
					    <span className="ant-rate-text"> 422个评价</span>
					    <div className="guess_detail_price">
					    	<p>中关村</p>
						    <span className="desc">￥</span><em className="price">228.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg10" src={ GuessImg10 } />}
					  >
					    <Meta
					      title="蟹老宋香锅（方庄店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={4.5} />
					    <span className="ant-rate-text"> 530个评价</span>
					    <div className="guess_detail_price">
					    	<p>回龙观</p>
						    <span className="desc">￥</span><em className="price">64.9 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">
					
					  <Card
					    hoverable
					    cover={<img alt="GuessImg11" src={ GuessImg11 } />}
					  >
					    <Meta
					      title="金真子纸上烤肉（双桥店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={3.5} />
					    <span className="ant-rate-text"> 15830个评价</span>
					    <div className="guess_detail_price">
					    	<p>双桥</p>
						    <span className="desc">￥</span><em className="price">68.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
				</div>
				<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg12" src={ GuessImg12 } />}
					  >
					    <Meta
					      title="正一味韩国料理（君太百货店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={5} />
					    <span className="ant-rate-text"> 5306个评价</span>
					    <div className="guess_detail_price">
					    	<p>西单</p>
						    <span className="desc">￥</span><em className="price">4.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
				</div>	  
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg13" src={ GuessImg13 } />}
					  >
					    <Meta
					      title="鼎极轩自助烤肉（小营店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={3.5} />
					    <span className="ant-rate-text"> 27530个评价</span>
					    <div className="guess_detail_price">
					    	<p>小营</p>
						    <span className="desc">￥</span><em className="price">72.9 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg14" src={ GuessImg14 } />}
					  >
					    <Meta
					      title="金滏山自助烤肉（劲松店）"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={3.5} />
					    <span className="ant-rate-text"> 16586个评价</span>
					    <div className="guess_detail_price">
					    	<p>劲松</p>
						    <span className="desc">￥</span><em className="price">49.0 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="GuessImg15" src={ GuessImg15 } />}
					  >
					    <Meta
					      title="比亚森"
					    />
					    <Rate disabled className="guess_rate"  allowHalf defaultValue={3} />
					    <span className="ant-rate-text"> 39530个评价</span>
					    <div className="guess_detail_price">
					    	<p>顺义城区</p>
						    <span className="desc">￥</span><em className="price">59.6 </em><span className="desc">起</span>
					    </div>
					  </Card>
			  	</div>
			</div>

		)
	}
}
export default Suitable;