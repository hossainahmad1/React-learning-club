
import './App.css';
import Component from './component/Question/Component';
import Work from './component/Work/Work';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h2 className='page'> MY LEARNING CLUB</h2>
        <h3>Select Your works</h3>
      </div>
      <Work></Work>
      <Component></Component>
    </div>
  );
}

export default App;
