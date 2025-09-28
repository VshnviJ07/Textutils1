import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? '#042743' : '',
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? '#042743' : '' }}>
      <div className="my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><strong>About Us</strong></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Content for Accordion Item #1
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Content for Accordion Item #2
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Content for Accordion Item #3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
