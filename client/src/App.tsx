import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './config/history';
import GroupCreate from './containers/Groups/GroupCreate/GroupCreate';
import GroupList from './containers/Groups/GroupList/GroupList';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

function App() {
	return (
		<Router history={history}>
			{/* Auth */}
			<Route path='/signup' exact component={Signup} />
			<Route path='/login' exact component={Login} />

			{/* Groups */}
			<Route path='/groups' exact component={GroupList} />
			<Route path='/groups/create' exact component={GroupCreate} />
		</Router>
	);
}

export default App;
