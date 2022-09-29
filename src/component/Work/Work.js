import React, { useEffect, useState } from 'react';
import Working from '../working/Working';

import './Work.css'
const Work = () => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])
    return (
        <div className='work'>
            <div className='work-container'>
                {
                    works.map(work => <Working
                        key={work.id}
                        work={work}
                    ></Working>)
                }

            </div>
            <div className='cart-container'>
                <h2>this is cart</h2>
            </div>
        </div>
    );
};

export default Work;