import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <button>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
    body: {
        borderTop: '4px solid rgb(223, 57, 81)',
        borderBottom: '4px solid rgb(223, 57, 81)',
        minHeight: '20rem',
        padding: '3rem'
    },

    bruh: {
        margin: 0
    }
});

export default Login;
