import React from 'react';
import './Cart.css'
const Cart = ({ list }) => {
    console.log(list)
    // const timeStrg = list.time;
    // const timeint = parseInt(timeStrg)
    let totalInt = 0;
    let total = parseInt(totalInt)
    for (const time of list) {
        total = total + time.time;
    }
    return (

        <div className='listCart'>
            <div>
                <h3>Add to Break</h3>
                <div className='break'>
                    <p>10h</p>
                    <p>20h</p>
                    <p>30h</p>
                    <p>40h</p>
                    <p>50h</p>
                </div>
            </div>
            <h3>Leraning Details</h3>
            <div className='l-time'>
                <h5>Leraning time</h5>
                <p>{total} hours</p>
            </div>
            <div className='l-time'>
                <h5>Break time</h5>
                <p>{ } hours</p>
            </div>
            <div>
                <button className='btn-active'>Activity completed</button>
            </div>

        </div>
    );
};

export default Cart;