import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
    const isHeader = (props.isHeader) ? props.isHeader : false;
    const textFirstCell = (props.textFirstCell) ? props.textFirstCell : null;
    const textSecondCell = (props.textSecondCell) ? props.textSecondCell.toString() : null;
    const { onChangeRow, isChecked } = props

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
        const rowChecked = (isChecked) ? css(styles.rowChecked) : null;

        return (
            <tr className={rowChecked}>
                <td>
                    <input type="checkbox" onChange={onChangeRow}/>
                    {textFirstCell}</td>
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
    },

    rowChecked: {
        backgroundColor: '#e6e4e4'
    }
});


export default CourseListRow;
