import React from 'react';
    
  function Activity2() {

    function button1() {
      alert('You Clicked Button 1');
    }
    function button2() {
      alert('You Clicked Button 2');
    }
    function button3() {
      alert('You Clicked Button 2');
    }
    
    return (
      <>
      <div className='d-flex align-items-center justify-content-center mt-5'>
      <button onClick={button1}>
        Button1
      </button>
      <button onClick={button2}>
        Button2
      </button>
      <button onClick={button3}>
        Button3
      </button>
      </div>
      
      </>
      
    );
  }
  
  export default Activity2;