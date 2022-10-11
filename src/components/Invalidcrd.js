import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Invalidcrd() {
    let navigate = useNavigate()

    const handleClick =()=>{
      navigate('/login',true)
    }
  return (
    <>
     <h3>Invalidcrd</h3>
     <Button onClick={handleClick} variant="primary" type="submit">
    Go back
      </Button>
    </>
   
  )
}

export default Invalidcrd