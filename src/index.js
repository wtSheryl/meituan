import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './RouteMap';
import { browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteMap history={ browserHistory }/>, 
	document.getElementById('meituan'));
registerServiceWorker();
