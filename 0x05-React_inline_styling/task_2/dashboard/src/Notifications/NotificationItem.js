import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, html, markAsRead, id} = this.props;

        let type;
        if (html) {
            if (typeof html !== "object") throw new Error(`html must be an object got ${typeof html}`);
            if (html.__html === undefined) throw new Error('html must have a key of "__html"');
            if (typeof html.__html !== "string") throw new Error('html.__html must be a string');
        }

        if (value) {
            if (typeof value !== 'string') throw new Error('value must be a string');
        }

        if (this.props.type) {
            type = this.props.type;
            if (typeof type !== 'string') throw new Error('type must be a string');
        } else {
            type = 'default';
        }

        const priority = (type === 'urgent') ? css(styles.urgent) : css(styles.default);

        return (
            (html)
            ? <li className={priority} data-priority={type} onClick={() => {markAsRead(id)}} dangerouslySetInnerHTML={html}></li>
            : <li className={priority} data-priority={type} onClick={() => {markAsRead(id)}}>{value}</li>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        color: 'rgb(5, 29, 163)'
    },

    urgent: {
        color: 'rgb(211, 64, 64)'
    }
});

export default NotificationItem;
