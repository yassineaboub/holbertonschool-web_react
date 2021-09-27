import logo from '../Holberton_logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function LogOut(props) {
  return (
    <div>
      <p> Welcome <b>{props.email}</b> <button onClick={props.logOut}>(logout)</button></p>
    </div>
  );
}

class Header extends React.Component {
  static contextType = AppContext;
  render() {
    const {user, logOut} = this.context;
    const {email, password, isLoggedIn} = user;

    return (
      <React.Fragment>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <div>
          {
            (isLoggedIn) 
            ? <LogOut email={email} logOut={logOut}/>
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

export default Header;