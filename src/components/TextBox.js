import React, { useState } from 'react'

export default function TextBox(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    const [text,setText] = useState('Enter your text');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleUpClickLower = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    return (
        <div className="container bg-light">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <div className="row g-2"> 
        <button onClick={handleUpClick} className="col-sm btn btn-danger m-1">convert to upper case</button>
        <button onClick={handleUpClickLower} className="col-sm btn btn-primary m-1">convert to lower case</button>
        </div>
        </div>
    )
}


