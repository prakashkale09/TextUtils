import React, {useState} from 'react';
 
export default function TextForm(props) {

    const handleUpClick=()=>
    {
       // console.log("upperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uperrcase!","sucess");
    }
    const handleLoClick=()=>
    {
       // console.log("upperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerrcase!","sucess");
    }
    const handleOnChange=(event)=>
    {
       // console.log("on change");
        setText(event.target.value);
    }
    const handleclearClick=()=>
    {
       // console.log("upperCase was clicked");
        let newText = " " ;
        setText(newText);
        props.showAlert("Text is cleared","sucess");
        
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
     // It is targetted by the button 'speak':
      
     

    const[text,setText]=useState(" ");
  return (
    <>
 <div>
    
    <h1>{props.heading}</h1>
    <div class="mb-3">
      <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn.btn-primary mx-2" onClick = {handleUpClick}>Convert to upperCase</button>
    <button className="btn.btn-primary mx-2" onClick = {handleLoClick}>Convert to lowerCase</button>
    <button className="btn.btn-primary mx-2" onClick = {handleclearClick}>Clear Text</button>
    <button type="submit mx-2" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button  onClick={speak}>Speak</button>

 </div>
 <div className="container my-3"></div>
 <h1>Your Text summary</h1>
 <p>{text.split(" ").length} words and {text.length} characters</p>
 <h2>Preview</h2>
 <p>{text}</p>
 </>
  )
}
