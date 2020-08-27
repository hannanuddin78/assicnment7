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
//<EnrollCourse course={enrollCorse}></EnrollCourse>

    return (
        <div>
            <div className="container-fluid px-2">
                <h2 className="text-center py-4 logo">Our All Course</h2>
                <div className="row">
                    <div className="col-md-9 row border-right">
                        {allCourses.map(allCourse => <Courses key={allCourse.id} allCourse={allCourse} EnrollCrouse={EnrollCrouse} ></Courses>)}
                    </div>
                    <div className="col-md-3">
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
        </div>
    );
};

export default AllCourse;