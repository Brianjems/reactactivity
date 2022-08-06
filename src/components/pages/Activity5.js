import {useState} from "react";


function Activity5() {


    const [animals, setAnimals] = useState([
      {name: "🐶 dog"},
      {name: "🐱 cat"},
      {name: "🐔 chicken"},
      {name: "🐮 cow"},
      {name: "🐴 horse"}
    ]);
  
    return (
      <>
      <div className='d-block text-center align-items-center justify-content-center mt-5'>
      {animals.map(item => 
        <h1>{item.name}</h1>
        )}
      
      </div>
      
      </>
      
    );
  }
    
    export default Activity5;