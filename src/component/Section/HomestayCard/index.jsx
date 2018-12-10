import React from 'react';
import HomestayCity from '../../../component/HomestayCard/HomestayCity'

export const tabList = [{
	key: 'jinan',
	tab: '济南',
}, {
	key: 'tianjin',
	tab: '天津',
}, {
	key: 'dalian',
	tab: '大连',
}, {
	key: 'taiyuan',
	tab: '太原',
}, {
	key: 'qinhuangdao',
	tab: '秦皇岛',
}, {
	key: 'shijiazhuang',
	tab: '石家庄',
}, {
	key: 'tangshan',
	tab: '唐山',
}, {
	key: 'chengde',
	tab: '承德',
}, {
	key: 'huhehaote',
	tab: '呼和浩特',
}];

export const contentList = {
	jinan: <HomestayCity />,
	tianjin: <h1>天津</h1>,
	dalian: <h1>大连</h1>,
	taiyuan: <h1>太原</h1>,
	qinhuangdao: <h1>秦皇岛</h1>,
	shijiazhuang: <h1>石家庄</h1>,
	tangshan: <h1>唐山</h1>,
	chengde: <h1>承德</h1>,
	huhehaote: <h1>呼和浩特</h1>,
}