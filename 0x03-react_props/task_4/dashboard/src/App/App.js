import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
    return (
      <Fragment>
        <Notifications />
        <div className='App'>
          <Header />
          <div className='App-body'>
	    {!isLoggedIn && <Login />}
	    {isLoggedIn && <CourseList />}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};
  
export default App;
