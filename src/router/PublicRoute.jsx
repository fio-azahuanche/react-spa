import React, { useContext } from 'react'
import { AuthContext } from '../auth';

export const PublicRoute = ({children}) => {
    const { logged } = useContext(AuthContext);

    return (!logged)
      ? children
      : <Navigate to="/marvel"/>
}
