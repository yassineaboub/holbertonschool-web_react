import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
    const isHeader = (props.isHeader) ? props.isHeader : false;
    const textFirstCell = (props.textFirstCell) ? props.textFirstCell : null;
    const textSecondCell = (props.textSecondCell) ? props.textSecondCell.toString() : null;

    if (textFirstCell === null) throw(new Error('textFirstCell is required'));

    if (isHeader) {
        if(textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2" className={css(styles.header)}>
                        {textFirstCell}
                    </th>
                </tr>
            );
        } else {
            return (
                <tr className={css(styles.default)}>
                    <th className={css(styles.algin)}>
                        {textFirstCell}
                    </th>
                    <th className={css(styles.algin)}>
                        {textSecondCell}
                    </th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#f5f5f5ab'
    },

    header: {
        backgroundColor: '#deb5b545'
    },

    algin: {
        textAlign: 'start'
    }
});

export default CourseListRow;
