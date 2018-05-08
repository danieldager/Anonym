import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AboutPage from './components/pages/AboutPage';
import NewAccountPage from './components/pages/NewAccountPage';


class App extends Component {
	render () {
		return (
			<div>
    			<Route path="/home" component={HomePage} />
    			<Route path="/login" component={LoginPage} />
    			<Route path="/about" component={AboutPage} />
    			<Route path="/newaccount" component={NewAccountPage} />
  			</div> 
		);
	}
}

  
export default App;
