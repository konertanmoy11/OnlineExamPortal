import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthService from './AuthService';

const ProtectedRoute = ({ component: Component, path, ...rest}) => {
    console.log(AuthService.isAuthenticated());
    return <Route path={path} {...rest}
        render={props => AuthService.isAuthenticated() === true ? (
            <Component {...props}/>
        ) : <Redirect to={{
            pathname: "/login"
        }}/>}/>
};
export default ProtectedRoute;
