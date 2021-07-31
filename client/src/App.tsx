import React from 'react';
import { Router } from 'react-router-dom';
import history from './config/history';

function App() {
	return <Router history={history}></Router>;
}

export default App;
