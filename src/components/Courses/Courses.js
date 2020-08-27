import React from 'react';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';

const Courses = (props) => {
    // console.log(props);single-item text-center my-4
    const {img, title, details} = props.allCourse;
    const handleClick = () => props.EnrollCrouse(props.allCourse);

    return (
        <div className="smh col-md-4">
            <div className="card">
                <EqualHeight>
                    <EqualHeightElement>
                        <img  src={img} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="price">{details}</p>
                            <button className="btn btn-sm btn-primary" onClick={handleClick} >Enroll Now</button>
                        </div>
                    </EqualHeightElement>
                </EqualHeight>
            </div>
        </div>
    );
};

export default Courses;