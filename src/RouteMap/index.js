import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import Downloads from '../mainPage/Downloads';
import City from '../mainPage/City';
import App from '../App.js';
export default class RouteMap extends Component {
	render() {
		return (
			<Router history={ this.props.history }>
				<Route path="/" component={ App } />
				<Route path='/downloads' component={ Downloads } />
				<Route path="/city" component={ City } />
			</Router>
		)
	}
}