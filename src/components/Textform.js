import React, { useState } from 'react';

export default function Textform(props) { 
  const [text, setText] = useState('');
  const [previousText, setPreviousText] = useState('');

  const handleUpClick = () => {
    setPreviousText(text); // Save current text for undo
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    setPreviousText(text); // Save current text for undo
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setPreviousText(text); // Save current text for undo
    setText('');
    props.showAlert("Text is clear", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied", "success");
  };

  const handleReverse = () => {
    setPreviousText(text); // Save current text for undo
    const newText = text.split('').reverse().join('');
    setText(newText);
  };

  const handlePaste = async () => {
    try {
      const newText = await navigator.clipboard.readText();
      setPreviousText(text); // Save current text for undo
      setText(newText);
    } catch (err) {
      console.log(err);
      props.showAlert("Failed to paste text", "danger");
    }
    props.showAlert("Text is pasted", "success");
  };

  const handleDelete = () => {
    setPreviousText(text); // Save current text for undo
    const newText = text.slice(0, -1);
    setText(newText);
    props.showAlert("Last character deleted", "success");
  };

  const handleItalics = () => {
    setPreviousText(text); // Save current text for undo
    let newText = `<i>${text}</i>`;
    setText(newText);
    props.showAlert("Text is Italic", "success");
  };

  const handleFirstCap = () => {
    setPreviousText(text); // Save current text for undo
    let newText = text.toLowerCase();
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText2);
    props.showAlert("First word is capitalized", "success");
  };

  const handleSpeak = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleUndo = () => {
    setText(previousText);
    setPreviousText('');
    props.showAlert("Text is undone", "success");
  };

  const handleReplace = () => {
    const newText = prompt("Enter text to replace:");
    if (newText !== null) {
      setPreviousText(text); // Save current text for undo
      setText(newText);
      props.showAlert("Text is replaced", "success");
    }
  };

  return (
    <div>
      <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{ backgroundColor: props.mode === 'dark' ? '#042743' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            style={{ 
              height: '250px', 
              backgroundColor: props.mode === 'dark' ? '#1e1e1e' : '#fff', // Lightened dark mode background
              color: props.mode === 'dark' ? '#fff' : '#000', 
              borderColor: props.mode === 'dark' ? '#333' : '#ced4da' 
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>
          Reverse Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlePaste}>
          Paste Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDelete}>
          Delete Last Character
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleItalics}>
          Italics Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleFirstCap}>
          Capitalize First Letter
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleSpeak}>
          Speak Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUndo}>
          Undo
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReplace}>
          Replace Text
        </button>
      </div>
      <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter(element => element.length !== 0).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter(word => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </div>
  );
}
