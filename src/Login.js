import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import details from './details.json'

function Login({setLogin}) {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(details.email===formData.email && details.password===formData.password){
            setLogin(true)
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