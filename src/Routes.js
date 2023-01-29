import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import EditProfileForm from './EditProfileForm';

const JoblyRoutes = ({ setTokenAfterLogin, setTokenAfterRegister }) => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/companies" element={<CompaniesList />} />
			<Route exact path="/companies/:handle" element={<CompanyDetail />} />
			<Route exact path="/jobs" element={<JobsList />} />
			<Route exact path="/login" element={<LoginForm setTokenAfterLogin={setTokenAfterLogin} />} />
			<Route exact path="/signup" element={<SignupForm setTokenAfterRegister={setTokenAfterRegister} />} />
			{/* <Route exact path="/profile" element={<SignupForm />} /> */}

			{/* <Navigate to="/" /> */}
		</Routes>
	);
};

export default JoblyRoutes;
