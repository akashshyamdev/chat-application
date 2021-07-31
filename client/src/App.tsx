import React from 'react';
import { Route, Router } from 'react-router-dom';
import Signup from './components/Auth/Signup/Signup';
import history from './config/history';

function App() {
	return (
		<Router history={history}>
			<Route path='/signup' exact component={Signup} />
		</Router>
	);
}

export default App;
