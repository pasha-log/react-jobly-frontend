import './Home.css';
import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';
import { Link } from 'react-router-dom';

const Home = () => {
	const { token, currentUser } = useContext(CurrentUserContext);
	return (
		<div className="HomeGreeting">
			<h1>Jobly</h1>
			<p>All the jobs, in one convenient place</p>
			{token ? <h4>Welcome back, {currentUser.firstName}!</h4> : <Link to="/signup">Signup</Link>}
		</div>
	);
};

export default Home;
