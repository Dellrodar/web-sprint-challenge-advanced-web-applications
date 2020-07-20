import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const intialState = {
	username: '',
	password: '',
};

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const [credentials, setCredentials] = useState(intialState);
	const history = useHistory();

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const login = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', credentials)
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.payload);
				history.push('/colors');
			})
			.catch((err) => console.log({ err }));
	};

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<div>
				<form onSubmit={login}>
					<input
						type='text'
						name='username'
						value={credentials.username}
						onChange={handleChange}
					/>
					<input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>
		</>
	);
};

export default Login;
