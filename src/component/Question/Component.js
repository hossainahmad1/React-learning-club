import React from 'react';
import './Component.css'
const Component = () => {
    return (
        <div className='total-content'>
            <h1 className='heading'>Answer to the Question</h1>
            <div className='content'>
                <h2 className='qus'>How does react work?</h2>
                <span className='ans'>Ans:</span>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
            </div>
            <div className='content'>
                <h2 className='qus'>what is different between to props and state?</h2>
                <span className='ans'>Ans:</span>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
            </div>
            <div className='content'>
                <h2 className='qus'>How does react work?</h2>
                <span className='ans'>Ans:</span>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
            </div>
        </div>
    );
};

export default Component;