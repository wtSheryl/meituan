import React from 'react';
import DiscountsAllAbove from '../../../component/DiscountsCard/DiscountsAllAbove';
export const tabList = [{
	key: 'allabove',
	tab: '全部',
}, {
	key: 'food',
	tab: '美食',
}, {
	key: 'relaxation',
	tab: '休闲',
}];

export const contentList = {
	allabove: <DiscountsAllAbove />,
	food: <h1>美食</h1>,
	relaxation: <h1>休闲</h1>,
}