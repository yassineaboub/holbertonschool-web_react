import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={css(styles.bruh)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.small)}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password"/>
                </div>
                <button style={{maxWidth: '2.5rem'}}>OK</button>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    bruh: {
        margin: 0
    },

    small: {
        display: 'flex',
        '@media (max-width: 900px)': {
            flexDirection: 'column'
        }
    }
});

export default Login;
