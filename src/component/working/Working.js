import React, { useEffect, useState } from 'react';
import './Working.css'
const Working = ({ handleList, work }) => {
    // console.log(props.work);
    // const {handleList, work} = props;
    const { img, name, rate, time } = work;


    return (
        <div className='working-place'>
            <img src={img} alt="" />
            <div className='working-info'>
                <h3 className='name'>{name}</h3>
                <p>Rate: ${rate}</p>
                <p>Time required: {time} h</p>
            </div>
            <button onClick={() => handleList(work)} className='btn-work'> Add to list</button>
        </div>
    );
};

export default Working;