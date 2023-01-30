import './App.css';
import { BrowserRouter } from 'react-router-dom';
import JoblyRoutes from './Routes';
import NavBar from './NavBar';
import JoblyApi from './api';
import { useEffect, useState } from 'react';
import CurrentUserContext from './CurrentUserContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
	const [ currentUser, setCurrentUser ] = useState();
	const [ storedValue, setValue ] = useLocalStorage();

	useEffect(
		() => {
			const getUserByUsername = async (username) => {
				JoblyApi.token = storedValue.token;
				let user = await JoblyApi.getUser(username);
				setCurrentUser(user);
			};

			storedValue ? getUserByUsername(storedValue.username) : console.log('Logged out');
		},
		[ storedValue ]
	);

	const setTokenAfterRegister = async (data, username) => {
		let token = await JoblyApi.registerUser(data);
		setValue({ token: token, username: username });
	};

	const setTokenAfterLogin = async (data, username) => {
		let token = await JoblyApi.loginUser(data);
		setValue({ token: token, username: username });
	};

	const logOutUser = () => {
		setValue(null);
	};

	return (
		<div className="App">
			<CurrentUserContext.Provider value={{ storedValue, currentUser }}>
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
