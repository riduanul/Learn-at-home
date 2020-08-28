import React from 'react';
import './Footer.css'
import logo from '../../fakeData/logo.png';
const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between">
             <div className=" logo col-md-3">
        <div>
            <img src={logo} alt="" width="200px"/>
        </div>
        <div>
        © All rights reserved by Learn @ Home.
        </div>
        </div>
            <div className="col-md-3">
                <ul>
                    <li><a href="u">Learn at home for Business</a></li>
                    <li><a href="t">Teach on Learn at Home</a></li>
                    <li><a href="g">Get the app</a></li>
                    <li><a href="a">About us</a></li>
                    <li><a href="c">Contact us</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <li><a href=".c">Careers</a></li>
                    <li><a href="b">Blog</a></li>
                    <li><a href="h">Help and Support</a></li>
                    <li><a href="a">Affiliate</a></li>
                </ul>
                </div>
            <div className="col-md-3">
                <ul>
                    <li><a href="t">Terms</a></li>
                    <li><a href="p">Privacy policy and cookie policy</a></li>
                    <li><a href="s">Sitemap</a></li>
                    <li><a href="f">Featured courses</a></li>
                </ul>
            </div>
           
        </div>
        
    );
};

export default Footer;