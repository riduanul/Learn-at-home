import React from 'react';
import logo from '../../fakeData/logo.png';
import './Header.css';



const Header = () => {
    return (
        <div className="header">
            <nav className=" fixed-top d-flex">
                <div className="img">
                    <img src={logo} alt="" width="250px"/>
                </div>
                    <div className="d-flex align-items-center">
                        <a href="./Home">Home</a>
                        <a href="./Courses">Courses</a>
                        <a href="./Contact">Contacts</a>
                    </div>
                <div className=" second d-flex justify-content-between align-items-center " >
                    <button className="btn btn-warning"><a href="login">Login</a></button> 
                    <button className="btn btn-warning"><a href="signup">Sign Up</a></button> 
                </div>
           </nav>
        </div>
    );
};

export default Header;