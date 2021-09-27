import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import {
  listCourses,
  listNotifications 
} from '../utils';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import * as uiActions from "../actions/uiActionCreator";
import PropTypes from 'prop-types';

function Body(props) {

  if (props.isLoggedIn) {
    return (
      <div className="CourseBody">
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
          <BodySection title="News from the school">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.</p>
          </BodySection>
        </BodySectionWithMarginBottom>
      </div>
    );
  } else {
    return (
      <BodySectionWithMarginBottom title="Log in to continue">
        <Login logIn={props.logIn}/>
        <BodySection title="News from the school">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.</p>
          </BodySection>
      </BodySectionWithMarginBottom>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listNotifications: listNotifications
    }

    this.handleKeypress = this.handleKeypress.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications;
    delete newList[id];
    this.setState({listNotifications: newList});
  }

  handleKeypress(event) {
    const logout = () => {
      window.alert('Logging you out');
      this.props.logOut();
    };

    if (event.code === 'KeyH' && event.ctrlKey) logout();
    if (event.code === 'KeyZ' && event.ctrlKey) logout();
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeypress);
  }

  render() {
    const {listNotifications} = this.state;
    const {
      displayDrawer, hideNotificationDrawer, displayNotificationDrawer,
      login, logout, isLoggedIn
    } = this.props;

    return (
      <React.Fragment>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.body)}>
            <Body
              isLoggedIn={isLoggedIn}
              logOut={logout}
              logIn={login}
            />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: { padding: "0rem 1rem" },

  body: {
    borderTop: '4px solid rgb(223, 57, 81)',
    borderBottom: '4px solid rgb(223, 57, 81)',
    minHeight: '20rem',
    padding: '3rem'
  },

  footer: {}
});

App.propTypes = {
  displayDrawer: PropTypes.bool,
  hideNotificationDrawer: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  displayDrawer: false,
  hideNotificationDrawer: () => {},
  displayNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
  isLoggedIn: false
}

function mapStateToProps(states) {
  const state = states.ui;
  const isLoggedIn = state.get('isUserLoggedIn') ;
  const displayDrawer = state.get('isNotificationDrawerVisible');
  return {isLoggedIn, displayDrawer};
}

const actions = {
  displayNotificationDrawer: uiActions.displayNotificationDrawer,
  hideNotificationDrawer: uiActions.hideNotificationDrawer,
  login: uiActions.loginRequest,
  logout: uiActions.logout
};

export {mapStateToProps, actions};

export default connect(mapStateToProps, actions)(App);
