import React from 'react';
import ReyingMovie from '../../../component/MovieCard/ReyingMovie'
export const tabList = [{
	key: 'reying',
	tab: '正在热映',
}, {
	key: 'coming',
	tab: '即将上映',
}];

export const contentList = {
	reying: <ReyingMovie />,
	coming: <h1>即将上映</h1>,
}