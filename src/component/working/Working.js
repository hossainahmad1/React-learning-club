import React, { useEffect, useState } from 'react';
import './Working.css'
const Working = (props) => {
    console.log(props.work)
    const { img, name, id, rate, time } = props.work;

    return (
        <div className='working-place'>
            <img src={img} alt="" />
            <div className='working-info'>
                <h3 className='name'>{name}</h3>
                <p>Rate: ${rate}</p>
                <p>Time required: {time}m</p>
            </div>
            <button className='btn-work'> Add to list</button>
        </div>
    );
};

export default Working;