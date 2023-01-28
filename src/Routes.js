// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import JoblyApi from './api';

// import Home from './Home';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
// import Company from './Company';
import JobsList from './JobsList';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
// import EditProfileForm from './EditProfileForm';

const JoblyRoutes = () => {
	// const [ isLoading, setIsLoading ] = useState(true);
	// const [ companies, setCompanies ] = useState([]);

	// useEffect(() => {
	// 	async function getAllCompanies() {
	// 		let companies = await JoblyApi.getAllCompanies();
	// 		setCompanies(companies);
	// 		setIsLoading(false);
	// 	}
	// 	getAllCompanies();
	// }, []);

	// if (isLoading) {
	// 	return <p>Loading &hellip;</p>;
	// }
	return (
		<Routes>
			<Route exact path="/">
				{/* <Home /> */}
			</Route>
			<Route exact path="/companies" element={<CompaniesList />} />
			{/* <CompaniesList companies={companies} /> */}
			{/* </Route> */}
			<Route exact path="/companies/:handle" element={<CompanyDetail />} />
			<Route exact path="/jobs" element={<JobsList />} />
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
