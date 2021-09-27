import React from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
}

const logOut = () => {};

const AppContext = React.createContext({user: defaultUser, logOut: logOut});

export default AppContext;
