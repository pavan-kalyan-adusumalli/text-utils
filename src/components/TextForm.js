import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Initial Text");

    const handletextchange = (event) =>{
        setText(event.target.value);
    }

    function toUpper()
    {
        setText(text.toUpperCase());
        props.showAlert("Text has been changed to Upper Case", "success")
    }

    function toLower()
    {
        setText(text.toLowerCase())
        props.showAlert("Text has been changed to Lower Case", "success")
    }

    function clearText()
    {
        setText("");
        props.showAlert("Text has been cleared", 'warning')
    }

    function copyText()
    {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", 'success')
    }

    function removeExtraSpaces() {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", 'success')
    }

  return (
    <div className='container mt-3'>
        <h1>Enter text to Analyze</h1>
        <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handletextchange}></textarea>
        <button className='btn btn-primary mx-1' onClick={toUpper}>Change to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={toLower}>Change to Lowercase</button>
        <button className='btn btn-success mx-1' onClick={clearText}>Clear Text</button>
        <button className='btn btn-success mx-1' onClick={copyText}>Copy Text</button>
        <button className='btn btn-warning mx-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
  )
}
