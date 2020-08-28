import React, { useState } from 'react';
import fakeData from '../../FakeData/FakeData';
import Courses from '../Courses/Courses';
import EnrollCourse from '../EnrollCourse/EnrollCourse';


const AllCourse = () => {
    
    const [allCourses, setAllCourses] = useState(fakeData);

    const [enrollCorse, setEnrollCourse] = useState([]);
    const EnrollCrouse = (allCourse) => {
        console.log('click', allCourse);
        const addCourse = [...enrollCorse, allCourse];
        setEnrollCourse(addCourse);
    };
    const totalPrice = enrollCorse.reduce((acc, current) => acc + current.price, 0);

    return (
        <div className="allCourse">
            <h2 className="text-center py-4 logo">Our All Course</h2>
            <div className="row">
                <div className="col-md-9 border-right">
                    <div className="row">
                        {allCourses.map(allCourse => <Courses key={allCourse.id} allCourse={allCourse} EnrollCrouse={EnrollCrouse} ></Courses>)}
                    </div>
                </div>
                <div className="cart col-md-3 position-sticky">
                    <h1 className="text-center">Enroll Course</h1>    
                    <h3 className="text-center">Course Enroll :  {enrollCorse.length} </h3>
                    <ul className="list-group">
                        {enrollCorse.map(course => <EnrollCourse course={course}></EnrollCourse>)}
                    </ul>
                    <button type="button" className="btn btn-primary btn-block">
                        Checkout <span className="badge badge-light">$ {totalPrice}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;