import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { timers } from 'jquery';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false,
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentDidMount() {
        window.addEventListener('submit', this.handleLoginSubmit);
    }

    componentWillUnmount() {
        window.removeEventListener('submit', this.handleLoginSubmit);
    }

    handleChangeEmail(event) {
        if (event.target.value === '' || this.state.password === '') this.setState({enableSubmit: false});
        else this.setState({enableSubmit: true});
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        if (this.state.email === '' || event.target.value === '') this.setState({enableSubmit: false});
        else this.setState({enableSubmit: true});
        this.setState({password: event.target.value});
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.setState({isLoggedIn: true});
    }

    render() {
        return (
            <div className={css(styles.bruh)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.small)}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChangeEmail} value={this.state.email} type="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChangePassword} value={this.state.password} type="password" id="password"/>
                    </div>
                    <input disabled={!this.state.enableSubmit} type='submit' value='OK' style={{maxWidth: '2.5rem'}}/>
                </form>
            </div>
        );
    }
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
