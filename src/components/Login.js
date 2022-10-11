import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Details from "./Details"
import {useNavigate,useLocation} from "react-router-dom"

function Login() {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    let location = useLocation()
    let navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Details.email===formData.email && Details.password===formData.password){
            navigate('/todo',true)
        }else{
          navigate('/invalidcrd',true)
          
        }
        
    }
    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
  return (
    <Form className='login_form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" value={formData.email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" value={formData.password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;