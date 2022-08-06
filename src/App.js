import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/pages/Activity3';
import Login from './components/pages/Activity6';
import React from 'react'
import { useState } from 'react';



function App() {
  const adminUser = {
    name: "name",
    lastname: "lastname"
  }

  const [user, setUser] = useState({name:"", lastname:""});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);
  }

  const logout = () => {
    console.log("|logout");
  }
  return (
    <div className="App">
    {(user.email !="")} ? (
      <div className='Welcome'>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>Logut</button>
      </div>

    )


    </div>
  
  );
}

export default App;
