import React, { useEffect, useState } from 'react';
import Cart from '../CartData/Cart';
import Working from '../working/Working';

import './Work.css'
const Work = () => {

    const [works, setWorks] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])

    // useEffect(() => {
    //     const addedList = 
    // }, [])

    const handleList = (work) => {
        // console.log(work)
        const newList = [...list, work];
        setList(newList)
    }


    return (
        <div className='work'>
            <div className='work-container'>

                {
                    works.map(work => <Working
                        key={work.id}
                        work={work}
                        handleList={handleList}
                    ></Working>)
                }

            </div>
            <div className='cart-container'>
                <Cart list={list}></Cart>
            </div>
        </div>
    );
};

export default Work;