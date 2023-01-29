import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css';
import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';

const NavBar = ({ logOutUser }) => {
	const { token, currentUser } = useContext(CurrentUserContext);
	return (
		<div>
			<Navbar expand="md">
				<NavLink to="/" className="navbar-brand">
					🏢 Jobly
				</NavLink>

				{token ? (
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink to="/companies">Companies</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/jobs">Jobs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/profile">Profile</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/" onClick={logOutUser}>
								Logout {currentUser.username}
							</NavLink>
						</NavItem>
					</Nav>
				) : (
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink to="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/signup">Signup</NavLink>
						</NavItem>
					</Nav>
				)}
			</Navbar>
		</div>
	);
};

export default NavBar;
