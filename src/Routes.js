import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/companies">
				<CompaniesList />
			</Route>
			<Route exact path="/companies/:company">
				<Company />
			</Route>
			<Route exact path="/jobs">
				<JobsList />
			</Route>
			<Route exact path="/login">
				<LoginForm />
			</Route>
			<Route exact path="/signup">
				<SignupForm />
			</Route>
			<Route exact path="/profile">
				<EditProfileForm />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
