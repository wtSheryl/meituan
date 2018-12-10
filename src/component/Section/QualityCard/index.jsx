import React from 'react';
import QualityAllAbove from '../../../component/QualityCard/QualityAllAbove';
export const tabListNoTitle = [{
	key: 'allabove',
	tab: '全部',
}, {
	key: 'date',
	tab: '约会聚餐',
}, {
	key: 'spa',
	tab: '丽人SPA',
}, {
	key: 'movie',
	tab: '电影演出',
}, {
	key: 'trips',
	tab: '品质出游',
}];

export const contentListNoTitle = {
	allabove: <QualityAllAbove />,
	date: <p>第二个</p>,
	spa: <p>The Third!!!</p>,
	movie: <p>The Four!!!</p>,
	trips: <h1>品质出游</h1>
}