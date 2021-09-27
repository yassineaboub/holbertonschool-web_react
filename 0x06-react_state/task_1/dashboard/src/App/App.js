import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import highOrderComponent from '../HOC/WithLogging';
import {
  listCourses,
  listNotifications 
} from '../utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
    const WithLoggingLogin = highOrderComponent(Login);
    return (
      <BodySectionWithMarginBottom title="Log in to continue">
        <WithLoggingLogin />
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
      displayDrawer: true
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
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
    const isLoggedIn = (this.props.isLoggedIn) ? this.props.isLoggedIn : false;

    return (
      <React.Fragment>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.body)}>
            <Body isLoggedIn={isLoggedIn}/>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func
}

App.defaultProps = {
  logOut: () => {}
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

export default App;
