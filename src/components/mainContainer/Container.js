import React, { useState } from 'react';
import './Container.css';
import fakeData from '../../fakeData/fakeData';
import Courses from '../courses/Courses';
import Cart from '../Cart/Cart';


const Container = () => {
    const data = fakeData;
    
    const [courses, setCourses] = useState(data);
    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (courses) => {
       const newCart = [...cart, courses];
        setCart(newCart)
        }
       
    return (
        
        <div className="container">
            <div className="courses">
                {
                    courses.map(item => <Courses courses={item} img={item.img} handleAddCourse={handleAddCourse}></Courses>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart> 
            </div>
        </div>
    );
};

export default Container;