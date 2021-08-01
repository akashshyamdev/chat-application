import Login from 'containers/Login/Login';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './config/history';
import Signup from './containers/Signup/Signup';

function App() {
	return (
		<Router history={history}>
			<Route path='/signup' exact component={Signup} />
			<Route path='/login' exact component={Login} />
		</Router>
	);
}

export default App;
