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
import AppContext from './AppContext';
import { connect } from 'react-redux';

function Body(props) {

  if (props.isLoggedIn) {
    return (
      <div className="CourseBody">
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses}/>
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
      displayDrawer: true,
      user: {email: '', password: '', isLoggedIn: false},
      logOut: () => {},
      listNotifications: listNotifications
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications;
    delete newList[id];
    this.setState({listNotifications: newList});
  }

  logIn(email, password) {
    this.setState({
      user: {email, password, isLoggedIn: true},
      logOut: this.logOut
    });
  }

  logOut() {
    this.setState({user: {email: '', password: '', isLoggedIn: false}});
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
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
    const {user, listNotifications} = this.state;
    const {email, password, isLoggedIn} = user;

    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.body)}>
            <Body
              isLoggedIn={isLoggedIn}
              logOut={this.state.logOut}
              logIn={this.logIn}
            />
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
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

export function mapStateToProps(state) {
  const isLoggedIn = state.get('isUserLoggedIn');
  console.log(isLoggedIn);
  return {isLoggedIn};
}

export default connect(mapStateToProps)(App);
