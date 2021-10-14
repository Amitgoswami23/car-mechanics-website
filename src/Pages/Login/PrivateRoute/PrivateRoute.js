import React from 'react'
import { Redirect } from 'react-router';
import useAuth from '../../../hooks/useAuth'
import {Route} from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const {users, isLoading} = useAuth();
    if(isLoading){
        return  <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render = {({location}) => users.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
            ></Redirect>}
        >

        </Route>
    )
}

export default PrivateRoute
