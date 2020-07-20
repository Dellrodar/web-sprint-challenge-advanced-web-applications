import React from 'react';
import { Route } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import PrivateRoute from './routes/PrivateRoute';
import ContactForm from './components/ContactForm';

import Login from './components/Login';
import './styles.scss';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Login} />
			<Route exact path='/contactus' component={ContactForm} />
			<PrivateRoute exact path='/colors' component={BubblePage} />
			{/*
          Build a PrivateRoute component that will
          display BubblePage when you're authenticated
        */}
		</div>
	);
}

export default App;
