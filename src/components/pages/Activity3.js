import { useState } from "react";
import React from 'react';


function Activity3() {
  {
    const [click, setClick] = useState({
      number: "0",
    });


    return (
      <>
        <div className='d-block text-center align-items-center justify-content-center mt-5'>
          <p>
            You Clicked the button {click.number} times.
          </p>
          <button className="mx-5"
            type="button"
            onClick={() => setClick({
              number: ++click.number,
            })}
          >Button</button>
        </div>

      </>
    )
  }
  ;
}

export default Activity3;