import React from 'react';
import {getFooterCopy, getFullYear} from '../utils';
import './Footer.css';
import AppContext from '../App/AppContext';

function Footer() {
    return (
        <AppContext.Consumer>
            {value => {
                return (
                    <div className="App-footer">
                        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                        {
                            (value.user.isLoggedIn) 
                            ? <p><a href="">Contact us</a></p>
                            : ''
                        }
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
}

export default Footer;
