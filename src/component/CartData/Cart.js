import React, { useState } from 'react';
import './Cart.css'
import logo from '../utilities/IMG.jpg'
import { getData, setData } from '../utilities/dataBase';
const Cart = ({ list }) => {
    console.log(list)
    // const timeStrg = list.time;
    // const timeint = parseInt(timeStrg)
    let totalInt = 0;
    let total = parseInt(totalInt)
    for (const time of list) {
        total = total + time.time;
    }
    const [breaki, setBreak] = useState('');

    const handleBreak = (e) => {
        setBreak(e)
        getData(e)
    }
    return (

        <div className='listCart'>
            <div>
                <div className='my-details'>
                    <img src={logo} alt="" />
                    <div className='my-data'>
                        <h4 className='my-name'>Hossain Ahmad</h4>
                        <p><small>Pabna,Bangladesh</small></p>
                    </div>

                </div>
                <div className='my-biodata'>
                    <div>
                        <h3>60<small>kg</small></h3>
                        <p>weight</p>
                    </div>
                    <div>
                        <h3>6.8</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>21<small>yrs</small></h3>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Add to Break</h3>
                <div className='break'>
                    <p onClick={(e) => handleBreak(e.target.innerText)}>10m</p>
                    <p onClick={(e) => handleBreak(e.target.innerText)}>20m</p>
                    <p onClick={(e) => handleBreak(e.target.innerText)}>30m</p>
                    <p onClick={(e) => handleBreak(e.target.innerText)}>40m</p>
                    <p onClick={(e) => handleBreak(e.target.innerText)}>50m</p>
                </div>
            </div>
            <h3>Leraning Details</h3>
            <div className='l-time'>
                <h5>Leraning time</h5>
                <p>{total} hours</p>
            </div>
            <div className='l-time'>
                <h5>Break time</h5>
                <p>{setData()}minutes</p>
            </div>
            <div>
                <button className='btn-active'>Activity completed</button>
            </div>

        </div>
    );
};

export default Cart;