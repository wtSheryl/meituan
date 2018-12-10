import React,{Component} from 'react';

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categoriesDetail:  {
				delicious:["代金券","甜点饮品","火锅","自助餐 ","小吃快餐","日韩料理",
				"西餐","聚餐宴请","烧烤烤肉","东北菜","川湘菜","江浙菜","香锅烤鱼","粤港菜 ",
				"中式烧烤/烤串","西北菜","咖啡酒吧茶馆","云贵菜","东南亚菜 ","海鲜","素食",
				"台湾/客家菜","创意菜","汤/粥/炖菜","蒙餐","新疆菜","其他美食","京菜鲁菜"],
				takeout:["美团外卖"],
				hotel: ["经济型","舒适型/三星级","高档型/四星级","豪华型/五星级"],
				hotcity:["上海","重庆","广州","南京","大连","武汉","成都","北京","西安"],
				movies: ["后来的我们","幕后玩家","头号玩家","复仇者联盟3:无限战争","战神纪","犬之岛"],
				tickets: ["国内机票","港澳台机票","国际机票","火车票"],
				entertainment:["足疗按摩","洗浴/汗蒸","酒吧","密室逃脱 ","轰趴馆","茶馆","私人影院",
				"DIY手工坊","采摘/农家乐","网吧网咖","游乐游艺","VR","桌面游戏","真人CS","棋牌室","其他玩乐","KTV"],
				services:["衣物/皮具洗护","家政","搬家运输","送水","充值缴费","服饰/鞋包养护","开锁换锁",
				"居家维修","管道疏通","家电维修清洗","电脑维修","手机维修","证件照/肖像摄影","照片冲印/图文文印",
				"商务服务/法律服务","文化传媒机构","成人用品/情趣用品"],
				beauties:["美发","美甲美腱","美容美体","医学美容","瑜伽舞蹈","瘦身纤体",
				"韩式定妆","祛痘","纹身","化妆品"],
				wedding:["婚纱摄影","旅拍","个性写真","婚宴","婚庆公司","婚纱礼服",
				"西服定制","婚戒首饰","婚车租赁","司仪主持","彩妆造型","婚礼跟拍","婚礼小礼品","更多婚礼服务"],
				children:["婴儿游泳","其他亲子游乐","早教中心","少儿英语 ","智力开发","托班/幼儿园",
				"幼儿教育","其他幼儿教育","儿童摄影","孕妇写真","上门拍","其他亲子摄影","月子会所","产后恢复",
				"妇幼医院","开奶催乳","月嫂","亲子购物","宝宝派对","亲子服务"],
				aerobial:["健身中心","武术场馆","游泳馆","羽毛球馆","溜冰场","射箭馆",
				"篮球场","网球馆","台球馆","乒乓球","足球场","高尔夫场","保龄球馆","体育场馆",
				"马术场","壁球馆","更多运动"],
				design:["半包装修","全包装修","清包装修","地板","瓷砖石材","橱柜",
				"灯饰照明","厨卫洁具","油漆涂料","集成吊顶","墙纸墙艺","门窗","木材板材","家用五金",
				"电工电料","楼梯","管材管件","家具","床上用品/家纺","家居饰品","厨具餐具","智能家居",
				"建材卖场","家居卖场","灯饰卖场"],
				study:["钢琴","吉他","小提琴","古筝","架子鼓","声乐","其他音乐培训","美容化妆",
				"会计","IT","厨艺","管理培训","摄影培训","司法考试","公务员培训","其他职业培训",
				"日语","英语","韩语","法语","德语","汉语","俄语","西班牙语","绘画","书法","其他美术"],
				healthy:["医院","齿科口腔","体检中心","药店","中医","其他健康服务","洗车","租车","加油站",
				"维修保养","驾校","汽车美容","陪练","汽车用品","停车场","汽车保险","4S店/汽车销售",
				"更多汽车服务","机油保养","汽车报价","二手车","广告驾校","交警队","汽车改装","汽车配件",
				"宠物店","宠物医院"],
				fun:["KTV","酒吧","密室逃脱","游乐游艺","网吧网咖","私人影院","DIY手工坊",
				"桌面游戏","采摘/农家乐","棋牌室","轰趴馆","真人CS","VR","其他玩乐"]},
		}
	}

	render() {
		var detail = this.props.dataDetail;
		var detailMap = this.state.categoriesDetail;
		if(detail === 'delicious') {
			return (
				detailMap.delicious.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'takeout') {
			return (
				detailMap.takeout.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'hotel') {
			return (
				detailMap.hotel.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'hotcity') {
			return (
				detailMap.hotcity.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'movies') {
			return (
				detailMap.movies.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'tickets') {
			return (
				detailMap.tickets.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'entertainment') {
			return (
				detailMap.entertainment.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'services') {
			return (
				detailMap.services.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'beauties') {
			return (
				detailMap.beauties.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'wedding') {
			return (
				detailMap.wedding.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'children') {
			return (
				detailMap.children.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'aerobial') {
			return (
				detailMap.aerobial.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'design') {
			return (
				detailMap.design.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'study') {
			return (
				detailMap.study.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'healthy') {
			return (
				detailMap.healthy.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} else if (detail === 'fun') {
			return (
				detailMap.fun.map(function(name){
					return (<li key={name}><a>{ name }</a></li>)
				})
			)
		} 

	}
}
export default Detail;