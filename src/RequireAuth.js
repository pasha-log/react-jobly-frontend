import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
	const { storedValue, currentUser } = useContext(CurrentUserContext);

	return storedValue && currentUser ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
