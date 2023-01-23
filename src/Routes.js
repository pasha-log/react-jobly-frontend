import { Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import CompaniesList from './CompaniesList';
// import Company from './Company';
// import JobsList from './JobsList';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
// import EditProfileForm from './EditProfileForm';

const JoblyRoutes = () => {
	return (
		<Routes>
			<Route exact path="/">
				{/* <Home /> */}
			</Route>
			<Route exact path="/companies">
				{/* <CompaniesList /> */}
			</Route>
			<Route exact path="/companies/:company">
				{/* <Company /> */}
			</Route>
			<Route exact path="/jobs">
				{/* <JobsList /> */}
			</Route>
			<Route exact path="/login">
				{/* <LoginForm /> */}
			</Route>
			<Route exact path="/signup">
				{/* <SignupForm /> */}
			</Route>
			<Route exact path="/profile">
				{/* <EditProfileForm /> */}
			</Route>
			{/* <Navigate to="/" /> */}
		</Routes>
	);
};

export default JoblyRoutes;
