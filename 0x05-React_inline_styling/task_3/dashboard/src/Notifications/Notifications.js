import React from 'react';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem'; 
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

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
    const { listNotifications, markAsRead } = props;

    if (listNotifications.length === 0) return(
        <NotificationItem
            type="defualt"
            value="No new notification for now"
        />
    );

    return(
        listNotifications.map(
            (notification) =>
                <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                    markAsRead={markAsRead}
                />
        )
    );
}

class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: !this.props.displayDrawer
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        const currentLength = this.props.listNotifications.length;
        const nextLength = nextProps.listNotifications.length;
        return (nextLength >= currentLength) ? true : false;
    }

    markAsRead(id) {

        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const hidden = this.state.hidden;
        const { listNotifications } = this.props;

        const toggle = () => {
            this.setState({hidden: !this.state.hidden});
        };
        const button_click = () => {
            console.log('Close button has been clicked');
            toggle();
        };

        const notificationStyles = (this.state.hidden) ? css(styles.mainNotice): css(styles.mainNotice, styles.onlyPopup);

        return (
            <div className={notificationStyles}>
                <div>
                    <p className={css(styles.menuItems_P)} onClick={toggle}>Your notifications</p>
                </div>
                <div hidden={hidden} className={css(styles.notifications)}>
                    <button style={button_style} aria-label="Close" onClick={button_click}>
                        <img style={img_style} src={closeIcon} alt="close-img"></img>
                    </button>
                    <p className={css(styles.notifications_P)}>Here is the list of notifications</p>
                    <ul className={css(styles.list)}>
                        <NotificationRows listNotifications={listNotifications} markAsRead={this.markAsRead}/>
                    </ul>
                </div>
            </div>
        );
    }
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    listNotifications: []
}

const styles = StyleSheet.create({
    mainNotice: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        minWidth: '250px',
        right: 0,
        top: 0,
        margin: '1rem',
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
        cursor: 'pointer'
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
        padding: 0
    },

    onlyPopup: {
        backgroundColor: 'white'
    },

    list: {
        '@media (max-width: 900px)': {
            listStyle: 'none',
            padding: 0
        }
    }
});

export default Notifications;
