import logo from '../Holberton_logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    );
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