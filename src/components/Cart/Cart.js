import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
   
    let fees = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        fees = fees + course.fee;
    }

    return (
        <div className="cart">
             <div className="carts">
               <h5><strong>Enrolled courses</strong></h5>
                <p> Total Course Enrolled: {cart.length}</p>
                <p> Total Course Fee:${fees} </p>
            </div>
        </div>
       
    );
};

export default Cart;