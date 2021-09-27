import logo from '../Holberton_logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {connect} from 'react-redux';
import * as uiActions from '../actions/uiActionCreator';
import PropTypes from 'prop-types';

function LogOut(props) {
  const {email, logOut} = props;
  return (
    <div>
      <p> Welcome <b>{email}</b> <button onClick={logOut}>(logout)</button></p>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, isLoggedIn, logout} = this.props;

    return (
      <React.Fragment>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <div>
          {
            (isLoggedIn) 
            ? <LogOut email={user.email} logOut={logout}/>
            : ''
          }
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    color: "rgb(223, 57, 81)",
    textAlign: "center",
    alignItems: "center"
  },

  logo: {
    height: "15rem",
    width: "15rem"
  }
});

Header.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func
}

Header.defaultProps = {
  user: {email: '', password: ''},
  isLoggedIn: false,
  logout: () => {}
}

export function mapStateToProps(states) {
  const state = states.ui;
  const isLoggedIn = state.get('isUserLoggedIn');
  const user = state.get('user');
  return {user, isLoggedIn};
}

const actions = {
  logout: uiActions.logout
};

export default connect(mapStateToProps, actions)(Header);