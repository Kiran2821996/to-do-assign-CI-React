import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Todo() {


  let navigate = useNavigate()
  const handleClick=()=>{
navigate('/login',true)
  }
  return (
    <>
     <div>Todo</div>
     <Button onClick={handleClick} variant="primary" type="submit">
    Log Out
      </Button>
    </>

   
  )
}

export default Todo