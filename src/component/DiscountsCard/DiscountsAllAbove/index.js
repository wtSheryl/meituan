import React, { Component } from 'react';
import { Card } from 'antd';
import DiscountsImg01 from './discountImages/discount01.jpg';
import DiscountsImg02 from './discountImages/discount02.jpg';
import DiscountsImg03 from './discountImages/discount03.jpg';
import DiscountsImg04 from './discountImages/discount04.jpg';
import DiscountsImg05 from './discountImages/discount05.jpg';
import DiscountsImg06 from './discountImages/discount06.jpg';
import DiscountsImg07 from './discountImages/discount07.jpg';
import DiscountsImg08 from './discountImages/discount08.jpg';
import DiscountsImg09 from './discountImages/discount09.jpg';
import DiscountsImg10 from './discountImages/discount10.jpg';
import './index.css';

const Meta = Card.Meta;

class DiscountsAllAbove extends Component {
	render() {
		return(
			<div className="discount_panel">
				<div className="discount_detail_container">
					
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg01" src={ DiscountsImg01 } />}
					  >
					    <Meta
					      title="星空影城（六里桥店）"
					      description="狂暴巨兽"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥29.9  </span> 
						    <em>门市价￥90</em></p>
						    <p>已售6.8万</p>
					    </div>
					  </Card>
				</div>
				<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg02" src={ DiscountsImg02 } />}
					  >
					    <Meta
					      title="祥云酒楼"
					      description="[密云区]1000元宴会券1张，可叠加"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥1  </span> 
						    <em>美团价￥1000</em></p>
						    <p>已售69</p>
					    </div>
					  </Card>
				</div>	  
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg03" src={ DiscountsImg03 } />}
					  >
					    <Meta
					      title="苏锦画舍"
					      description="600克花开陌上蛋糕冰淇淋一份"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥0.01  </span> 
						    <em>门市价￥99999</em></p>
						    <p>已售88</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg04" src={ DiscountsImg04 } />}
					  >
					    <Meta
					      title="井格重庆火锅"
					      description="[酒仙桥]68元火锅锅底代金券1张"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥1  </span> 
						    <em>美团价￥68</em></p>
						    <p>已售687</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg05" src={ DiscountsImg05 } />}
					  >
					    <Meta
					      title="博纳国际影城（方庄店）"
					      description="起跑线"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥24  </span> 
						    <em>门市价￥100</em></p>
						    <p>已售2.0万</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg06" src={ DiscountsImg06 } />}
					  >
					    <Meta
					      title="雅韵医疗美容门诊部"
					      description="[双榆树]免费整形"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥0.1  </span> 
						    <em>门市价￥12320</em></p>
						    <p>已售0</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg07" src={ DiscountsImg07 } />}
					  >
					    <Meta
					      title="滇草香云南原生态汤火锅"
					      description="[8店通用]锅底4选1"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥1  </span> 
						    <em>美团价￥59</em></p>
						    <p>已售156</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg08" src={ DiscountsImg08 } />}
					  >
					    <Meta
					      title="博纳国际影城（方庄店）"
					      description="头号玩家"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥29  </span> 
						    <em>门市价￥120</em></p>
						    <p>已售13.0万</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg09" src={ DiscountsImg09 } />}
					  >
					    <Meta
					      title="金吉列留学·移民"
					      description="[国贸/建外]留学申请大礼包"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥0.01  </span> 
						    <em>门市价￥6000</em></p>
						    <p>已售17</p>
					    </div>
					  </Card>
			  	</div>
			  	<div className="discount_detail_container">	
					  <Card
					    hoverable
					    cover={<img alt="DiscountsImg10" src={ DiscountsImg10 } />}
					  >
					    <Meta
					      title="博纳国际影城（方庄店）"
					      description="狂暴巨兽"
					    />
					    <div className="discount_detail_price">
						    <p className="price"><span>￥29  </span> 
						    <em>门市价￥120</em></p>
						    <p>已售6.8万</p>
					    </div>
					  </Card>
			  	</div>
			</div>

		)
	}
}
export default DiscountsAllAbove;