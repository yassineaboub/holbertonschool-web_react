import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import * as actions from '../actions/courseActionCreators';
import { getListCourses, usefullListCourses } from '../selectors/courseSelector';

function CourseRows(props) {
    const { listCourses, onChangeRow } = props;

    if (listCourses.length === 0) return(
     <CourseListRow textFirstCell="No course available yet" onChangeRow={onChangeRow}/>
    );

    return(
        listCourses.map((course) =>
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isChecked={course.isSelected}
              onChangeRow={() => {onChangeRow(course.id, !course.isSelected)}}
            />
        )
    );
}

class CourseList extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeRow = this.onChangeRow.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow(id, checked) {
        const {selectCourse, unSelectCourse} = this.props;
        const index = parseInt(id);

        if (checked) selectCourse(index);
        else unSelectCourse(index);
    }

    render() {
        const { listCourses } = this.props;
        
        return (
            <table id="CourseList" className={css(styles.table)}>
                <thead className={css(styles.border)}>
                    <CourseListRow
                        textFirstCell="Available courses"
                        isHeader={true}
                    />
                    <CourseListRow
                        textFirstCell="Course name"
                        textSecondCell="Credit"
                        isHeader={true}
                    />
                </thead>
                <tbody className={css(styles.border)}>
                    <CourseRows listCourses={listCourses} onChangeRow={this.onChangeRow}/>
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    listCourses: PropTypes.array
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

export function mapStateToProps(states) {
    const state = states.courses;
    const entities = getListCourses(state);
    const listCourses = usefullListCourses(state);
    return { listCourses };
}

export default connect(mapStateToProps, actions)(CourseList);
