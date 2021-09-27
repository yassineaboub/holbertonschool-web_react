import React from 'react';

function CourseListRow(props) {
    const isHeader = (props.isHeader) ? props.isHeader : false;
    const textFirstCell = (props.textFirstCell) ? props.textFirstCell : null;
    const textSecondCell = (props.textSecondCell) ? props.textSecondCell.toString() : null;

    if (textFirstCell === null) throw(new Error('textFirstCell is required'));

    if (isHeader) {
        if(textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2" style={{backgroundColor: "#deb5b545"}}>
                        {textFirstCell}
                    </th>
                </tr>
            );
        } else {
            return (
                <tr style={{backgroundColor: "#f5f5f5ab"}}>
                    <th style={{textAlign: "start"}}>
                        {textFirstCell}
                    </th>
                    <th style={{textAlign: "start"}}>
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

export default CourseListRow;
