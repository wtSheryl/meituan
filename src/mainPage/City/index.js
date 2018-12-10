	import React, { Component } from 'react';
	import Header from '../../component/Header';
	import {getAreaList} from '../../api/area.js';
	import { Icon, Cascader, AutoComplete } from 'antd';
	import './index.css';
	import { content,alphabet_map,capital_map,cityOptions} from './index.jsx';

	export default class City extends Component {
	  state = {
	    visible: false,
	    capital:[].concat.apply([],capital_map),
	    hotcity: [],
	    capitalCity: []
	  }

	  componentDidMount() {
	  	this.getJsonData();
	  }

	  getJsonData = () => {
	  	 const _this = this;
	  	 const data = getAreaList();
	  	 console.log("data=="+data);
         data.then(function(res) {
		 	_this.setState({hotcity:res.hotcity});
		 	_this.setState({capitalCity: res.capitalCity});
		}).then(undefined, function(error) {
		    console.log('error', error);
		});

	  }

	  hide = () => {
	    this.setState({
	      visible: false,
	    });
	  }
	  handleVisibleChange = (visible) => {
	    this.setState({ visible });
	  }
	  chooseProvince = (province) => {
	  	this.setState({
	  		province:province
	  	})
	  }

	  onChange = (value, selectedOptions) => {
		  console.log(value, selectedOptions);
		  console.log(this.state.capitalCity);
	}

	filter = (inputValue, path) =>{
	  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
	}
	displayRender = (label) => {
		return label[label.length - 1];
	}

		render() {
			return(
				<div className="App">
	        		<Header />
	        		<div className="section_container">
						<div className="section_main">
							<div className="city_page">
								<div className="city_province"><span>按省份选择：</span>
										<Cascader
										    options={cityOptions}
										    onChange={this.onChange}
										    placeholder="请选择"
										    style={{width:300}}
										    size="small"
										    expandTrigger="hover"
										    showSearch={this.filter}
										    displayRender={this.displayRender}
										  />						
									  <span className="city_search">直接搜索：</span>
									      <AutoComplete
									      style={{ width: 300, height: 40 }}
									      dataSource={this.state.capital}
									      placeholder="请输入城市中文或拼音"
									      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
									    />
								</div>
								<div className="city_hotcity">
									<span>热门城市：</span>
									{
										this.state.hotcity.map(function (data){
											return (<span key={data.id}><a title={data.name}>{data.name}</a></span>)
										})
									}
								</div>
								<div className="capital_province">
									<span>按拼音首字母选择：</span>
									<div className="anchor_container">
										{
											alphabet_map.map(function(data){
												return (<a key={data.alphabet} href={data.id} title={data.alphabet} >{data.alphabet}</a>)
											})
										}
									</div>
								</div>

								{
									this.state.capitalCity.map(function(data){
										console.log("mapData="+data.city)
										return (
											<div key={data.location} id={data.location} className="capital_city">
												<div className="alphabet_remark">{data.title}</div>
												<div className="alphabet_city">
													<ul>{
														 data.city.map(function(index){
														 	return (<li key={index.id}><a>{index.name}</a></li>)
														 })
													}</ul>
												</div>
											</div>			
										)
									})
								}
							</div>
						</div>
	        		</div>
				</div>
			)
		}
	}