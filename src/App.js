import './App.css';
import { BrowserRouter } from 'react-router-dom';
import JoblyRoutes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './api';
import { useEffect, useState } from 'react';
import CurrentUserContext from './CurrentUserContext';

function App() {
	const [ token, setToken ] = useState(null);
	const [ currentUser, setCurrentUser ] = useState({});
	const [ username, setUsername ] = useState('');

	useEffect(
		() => {
			const getUserByUsername = async (username) => {
				let user = await JoblyApi.getUser(username);
				// console.log(user);
				setCurrentUser(user);
			};
			username && token ? getUserByUsername(username) : console.log('Logged out');
		},
		[ token ]
	);

	const setTokenAfterRegister = async (data, username) => {
		let token = await JoblyApi.registerUser(data);
		setUsername(username);
		setToken(token);
	};

	const setTokenAfterLogin = async (data, username) => {
		let token = await JoblyApi.loginUser(data);
		setUsername(username);
		setToken(token);
	};

	const logOutUser = () => {
		setToken(null);
		JoblyApi.token = null;
	};

	return (
		<div className="App">
			<CurrentUserContext.Provider value={{ token, currentUser }}>
				<BrowserRouter>
					<NavBar logOutUser={logOutUser} />
					<main>
						<JoblyRoutes
							setTokenAfterRegister={setTokenAfterRegister}
							setTokenAfterLogin={setTokenAfterLogin}
						/>
					</main>
				</BrowserRouter>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
