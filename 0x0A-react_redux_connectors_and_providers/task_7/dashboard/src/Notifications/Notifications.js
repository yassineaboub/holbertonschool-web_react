import React from 'react';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem'; 
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {connect} from 'react-redux';
import * as actions from '../actions/notificationActionCreators';
import * as selectors from '../selectors/notificationSelector';

const button_style = {
    position: 'relative',
    left: '97%',
    width: '1rem',
    height: '1rem',
    margin: '1px 1px',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    cursor: 'pointer'
};

const img_style = {
    width: '1rem',
    height: '1rem'
};

function NotificationRows(props) {
    const { notifications, markAsRead, unread } = props;

    if (unread.length === 0) return(
        <NotificationItem
            type="defualt"
            value="No new notification for now"
        />
    );
    
    let index = 0;

    const list = notifications.map(
        (notification) => <NotificationItem
                key={notification.guid}
                id={index++}
                guid={notification.guid}
                type={notification.type}
                html={notification.html}
                value={notification.value}
                markAsRead={markAsRead}
                hidden={notification.isRead}
            />
    )

    return(list);
}

class Notifications extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        const hidden = !this.props.displayDrawer;
        const { notifications, markAsRead, unread } = this.props;

        const toggle = () => {
            if (this.props.displayDrawer) {
                this.props.handleHideDrawer();
            } else {
                this.props.handleDisplayDrawer();
            }
        };
        const button_click = () => {
            console.log('Close button has been clicked');
            toggle();
        };

        const notificationStyles = (hidden) ? css(styles.mainNotice, styles.hidden): css(styles.mainNotice);

        return (
            <React.Fragment>
                <div style={{margin: '1rem'}}>
                    <p className={css(styles.menuItems_P)} onClick={toggle}>Your notifications</p>
                </div>
                <div className={notificationStyles}>
                    <div className={styles.notifications}>
                        <button style={button_style} aria-label="Close" onClick={button_click}>
                            <img style={img_style} src={closeIcon} alt="close-img"></img>
                        </button>
                        <p className={css(styles.notifications_P)}>Here is the list of notifications</p>
                        <ul className={css(styles.list)}>
                            <NotificationRows
                                notifications={notifications}
                                markAsRead={markAsRead}
                                unread={unread}
                            />
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
    notifications: PropTypes.array,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markAsRead: PropTypes.func,
    unread: PropTypes.array
};

Notifications.defaultProps = {
    notifications: [],
    unread: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markAsRead: () => {}
}

const translateKeyframes = {
    '0%': { transform: 'translateY(0px)' },
    '25%': { transform: 'translateY(-5px)' },
    '75%': { transform: 'translateY(5px)' },
    '100%': { transform: 'translateY(0px)' },
};

const opacityKeyframes = {
    'from': {
        opacity: 0.5,
    },

    'to': {
        opacity: 1,
    }
};

const styles = StyleSheet.create({
    mainNotice: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        minWidth: '250px',
        right: 0,
        top: 0,
        margin: '1rem',
        backgroundColor: 'white',
        '@media (max-width: 900px)': {
            fontSize: '20px',
            left: 0,
            bottom: 0,
            margin: 0
        }
    },

    menuItems_P: {
        padding: 0,
        margin: 0,
        textAlign: 'end',
        cursor: 'pointer',
        ':hover': {
            animationName: [translateKeyframes, opacityKeyframes],
            animationIterationCount: 3,
            animationDuration: '.5s',
            transitionDuration: '1s'
        },
    },

    notifications: {
        border: `1px dashed rgb(211, 64, 64)`,
        padding: '0 1rem',
        '@media (max-width: 900px)': {
            border: 'none',
            padding: 0
        }
    },

    notifications_P: {
        margin: 0,
        padding: 0,
    },

    hidden: {
        display: 'none'
    },

    list: {
        '@media (max-width: 900px)': {
            listStyle: 'none',
            padding: 0
        }
    },
});

export function mapStateToProps(states) {
    const state = states.notifications
    const filter = state.get('filter');
    const loading = state.get('loading');
    const notifications = state.get('notifications');

    const unread = selectors.getUnreadNotifications(state);

    return {filter, loading, notifications, unread};
}

export default connect(mapStateToProps, actions)(Notifications);
