import PropTypes from 'prop-types';

const HtmlShape = PropTypes.shape({
    __html: PropTypes.string
});

const NotificationItemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: HtmlShape,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
});

export default NotificationItemShape;
