import React from 'react';
import {getFooterCopy, getFullYear} from '../utils';
import './Footer.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export function mapStateToProps(states) {
    const state = states.ui;
    const user = state.get('user');
    const isLoggedIn = state.get('isUserLoggedIn');
    return {user, isLoggedIn};
}

function Footer(props) {
    const {user, isLoggedIn} = props;
    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {
                (isLoggedIn) 
                ? <p><a href="">Contact us</a></p>
                : ''
            }
        </div>
    );
}

Footer.propTypes = {
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool
};

Footer.defaultProps = {
    user: {email: "", password: ""},
    isLoggedIn: false
}

export default connect(mapStateToProps)(Footer);
