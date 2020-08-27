import React from 'react';

const EnrollCourse = (props) => {
    const course = props.course;
    // const total = course.reduce((total, prd) => total + prd.price , 0);
    return (
        <div>
            <li className="list-group-item d-flex my-2 shadow justify-content-between">
                <span>{course.title}</span> <span> ${course.price}</span>
            </li>
        </div>
    );
};

export default EnrollCourse;