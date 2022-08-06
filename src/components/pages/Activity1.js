import React from 'react';




function Activity1() {

  function sayClicked() {
    alert('Clicked!');
  }
  
  return (
    <>
   <div className='d-flex align-items-center justify-content-center mt-5'>
   <button onClick={sayClicked}>
      Click me!
    </button>
   </div>
   
    </>
  );
}

export default Activity1;


    
