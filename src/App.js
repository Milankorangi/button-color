import React, { useState } from 'react';
import './App.css';
import { useStateValue } from './store/StateProvider';
import { actionTypes } from './store/reducer';

function App() {
  const [{color}, dispatch] = useStateValue();
  const [colors, setColors] = useState(['red', 'green', 'blue', 'black', 'orange']);
  const [current, setCurrent] = useState('red');

  const changeColor = (e) => {
    const value = colors[Math.floor((Math.random() * 10)/2)];
    if(current === 'blue'){
      dispatch({
        type: actionTypes.SET_COLOR,
        color: 'green'
    })
    }else {
      dispatch({
        type: actionTypes.SET_COLOR,
        color: value
    }) 
    }
    setCurrent(value);
  }

  return (
    <div className="App">
      <div>
        <button 
          style={{height: '40px', width: '180px', color: 'white', outline: 'none',  backgroundColor: current, borderRadius: '10px'}} onClick={changeColor}>
          Change Color 
        </button>
      </div>
      <div>
        <h5>Button Colors: {color.map(col => <span style={{color: col}}> {col}, </span>)} </h5>
      </div>
    </div>
  );
}

export default App;
