import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={css(styles.body)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    body: { marginBottom: "40px" }
});

export default BodySectionWithMarginBottom;
