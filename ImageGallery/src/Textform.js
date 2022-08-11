import React, { useState } from 'react';

export default function Textform(props) {

    const changedInput = (e) => {
        setText(e.target.value);
    }

    const clickedMe = () => {
        setText(text.toUpperCase());
    }

    const changeColor = () => {
        document.getElementById('color').style.color = 'blue';
    }

    const clearText = () => {
        setText('');
    }

    const [text, setText] = useState("Enter Text");

    return (
        <div className="container">
            <textarea className='my-2' rows="8" cols="30" type="text" value={text} onChange={changedInput} /><br/>
            <button className='mx-1' onClick={clickedMe}>ClickMe!</button>
            <button className='mx-1' onClick={changeColor}>ChangeColorToBlue</button>
            <button className='mx-1' onClick={clearText}>ClearText</button>
            <div className='my-2' />{text.length > 0 ? text.split(' ').length : 0} words and {text.length} characters
            <div className='my-2' />{text.length > 0 ? (0.008 * text.split(' ').length).toFixed(3) : 0} minutes read
            <h2 className='my-2'>Preview</h2>
            <h5 className='my-2' id='color'>{text}</h5>
        </div>
    );
}
