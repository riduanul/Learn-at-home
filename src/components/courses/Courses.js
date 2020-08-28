import React from 'react';
import './courses.css';

const Courses = (props) => {
    const {img,title,desc,fee} = props.courses;
    const handleAddCourse = props.handleAddCourse;
    
    return (
        <div className="items">
           <div className="course">
                <h2><img src={img} alt="" /></h2>
                <h5><strong>{title}</strong> </h5>
                <p> {desc}</p>
                <h5><strong>${fee}</strong> </h5>
                <button onClick={() => handleAddCourse(props.courses)} className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;