import React from 'react';
import {getAreaList} from '../../api/area.js';
import './index.css';

export const alphabet_map = [
		{"id":"#cityA", "alphabet":"A"},
		{"id":"#cityB", "alphabet":"B"},
		{"id":"#cityC", "alphabet":"C"},
		{"id":"#cityD", "alphabet":"D"},
		{"id":"#cityE", "alphabet":"E"},
		{"id":"#cityF", "alphabet":"F"},
		{"id":"#cityG", "alphabet":"G"},
		{"id":"#cityH", "alphabet":"H"},
		{"id":"#cityJ", "alphabet":"J"},
		{"id":"#cityK", "alphabet":"K"},
		{"id":"#cityL", "alphabet":"L"},
		{"id":"#cityM", "alphabet":"M"},
		{"id":"#cityN", "alphabet":"N"},
		{"id":"#cityP", "alphabet":"P"},
		{"id":"#cityQ", "alphabet":"Q"},
		{"id":"#cityR", "alphabet":"R"},
		{"id":"#cityS", "alphabet":"S"},
		{"id":"#cityT", "alphabet":"T"},
		{"id":"#cityW", "alphabet":"W"},
		{"id":"#cityX", "alphabet":"X"},
		{"id":"#cityY", "alphabet":"Y"},
		{"id":"#cityZ", "alphabet":"Z"}];

var arrayCity = [["北京","天津","上海"],["重庆","新疆","西藏"],["宁夏","甘肃","青海"],
["陕西","黑龙江","吉林"],["辽宁","内蒙古","河北"],["河南","四川","贵州"],["云南","安徽","湖北"],
["湖南","山东","山西"],["江苏","浙江","福建"],["江西","广东","广西"],["海南","香港","澳门"],["台湾"]];
export const content = (
  <div style={{width:160}}>
    {
    	arrayCity.map(function(arrayCity) {
    		return (<div key={arrayCity} className="wrapper_province">
    			<a>{ arrayCity[0] }</a>
    			<a>{ arrayCity[1] }</a>
    			<a>{ arrayCity[2] }</a></div>)
    	})
    }
  </div>
)
var hubei = [{value: '武汉',label: '武汉'},{value: '黄石',label: '黄石'},{value: '十堰',label: '十堰'},
{value: '恩施',label: '恩施'},{value: '宜昌',label: '宜昌'},{value: '襄阳',label: '襄阳'},{value: '鄂州',label: '鄂州'},{value: '汉中',label: '汉中'}];

var hunan = [{value: '长沙',label: '长沙'},{value: '岳阳',label: '岳阳'},{value: '常德',label: '常德'},{value: '张家界',label: '张家界'},{value: '娄底',label: '娄底'},{value: '怀化',label: '怀化'},{value: '邵阳',label: '邵阳'},{value: '湘西土家族苗族自治区',label: '湘西土家族苗族自治区'},{value: '郴州',label: '郴州'},{value:'永州',label:'永州'}]

export const cityOptions = [{
  value: '北京',
  label: '北京',
  children: [{
    value: '北京',
    label: '北京',
    children: [{value:'昌平区',label:'昌平区'},{value:'朝阳区',label:'朝阳区'}]
    }],
}, {
  value: '湖南',
  label: '湖南',
  children: hunan
  },{
  value: '湖北',
  label: '湖北',
  children: hubei
}];