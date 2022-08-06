import {useState} from "react";

function Activity4() {


  const [animals, setAnimals] = useState([
    {name: "dog"},
    {name: "cat"},
    {name: "chicken"},
    {name: "cow"},
    {name: "horse"}
  ]);

  return (
    <>
    <div className='d-block text-center align-items-center justify-content-center mt-5'>
    {animals.map(item => 
      <li>{item.name}</li>
      )}
    
    </div>
    
    </>
    
  );
}
  
  export default Activity4;