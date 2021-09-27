import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseRows(props) {
    const { listCourses } = props;

    if (listCourses.length === 0) return(
     <CourseListRow textFirstCell="No course available yet" />
    );

    return(
        listCourses.map((course) =>
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
        )
    );
}

function CourseList(props) {
    const { listCourses } = props;

    return (
        <table id="CourseList" className={css(styles.table)}>
            <thead className={css(styles.border)}>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody className={css(styles.border)}>
                <CourseRows listCourses={listCourses} />
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};

const styles = StyleSheet.create({
    table: {
        width: '100%',
        borderCollapse: 'collapse'
    },

    border: {
        border: '1px solid rgba(75, 74, 74, 0.3)'
    }
});

export default CourseList;
