import React, { useContext } from 'react';
import CourseItem from './CourseItem';
import { Context } from '../index';

const CourseList = () => {
    const { course } = useContext(Context)
    return (
        <div className="course-list_container">
            {course.courses.map(course =>
                <CourseItem key={course.id} course={course} />
            )}
        </div>
    );
};

export default CourseList;