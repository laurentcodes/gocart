import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRouter = ({ children }) => {
	const authToken = useSelector((state) => state.auth.userLogin.authToken);

	const location = useLocation();

	if (!authToken) {
		return <Navigate to='/login' state={{ path: location.pathname }} />;
	}

	return children;
};

export default PrivateRouter;
