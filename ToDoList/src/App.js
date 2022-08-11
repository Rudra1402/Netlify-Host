import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import ListItems from './ListItems';

function App() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setToDo(e.target.value);
  }

  const handleSave = () => {
    if (toDo === "") {
      alert("A ToDo cannot be EMPTY!");
    }
    else {
      setList([toDo, ...list]);
      setToDo("");
    }
  }

  const onDelete = (key) => {
    const temp = list.filter((ele, index) => {
      return index !== key;
    })
    setList(temp);
  }

  return (
    <div className="MainContainer">
      <div className='section'>
        <h2 className='display-4 my-3'>ToDo List</h2>
        <div className='d-flex justify-content-center'>
          <input className='mx-1' id='formControl' onChange={handleInput} value={toDo} placeholder='Write your ToDo'></input>
          <button className='mx-1' onClick={handleSave}>Save</button>
        </div>
        <div className='containScroll'>
          <div className='lists'>
            {list.map((ele, index) => {
              return (
                <ListItems value={ele} key={index} del={() => onDelete(index)} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;