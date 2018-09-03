import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<Router>
		<Routes />
	</Router>,
   document.getElementById('root'));
registerServiceWorker();
