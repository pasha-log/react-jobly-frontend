import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';

{
	/* App - Job detail/Companies' job details page 
(detail page component, state: applied or not, job props: descriptions, titles, salary, equity, company props: descriptions, name, jobs) 
- Companies list (props: list of jobs it has) - SignupForm(formData, addNewUser)/LoginForm(formData, logUserIn)/EditProfileForm(formData, editUserInfo) - */
}
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Routes />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
