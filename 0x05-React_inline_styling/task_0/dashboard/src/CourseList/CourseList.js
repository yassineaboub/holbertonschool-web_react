import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

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
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
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

export default CourseList;
