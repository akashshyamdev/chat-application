import Login from 'components/Auth/Login/Login';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import Signup from './components/Auth/Signup/Signup';
import history from './config/history';

function App() {
	return (
		<Router history={history}>
			<Route path='/signup' exact component={Signup} />
			<Route path='/login' exact component={Login} />
		</Router>
	);
}

export default App;
