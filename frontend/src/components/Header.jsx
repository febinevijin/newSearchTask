import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [name, setName] = useState("")
  console.log(name,'lllllllllllllll');

  useEffect(() => {
    let user = localStorage.getItem("userInfo");
   if(user)
   {
     user = JSON.parse(user) 
    
     setName(user.email)
   }
     
      
     }, [])

     let navigate = useNavigate();


  return (
    <div>
        <Navbar bg="light" variant="light" className='border border-info'>
      <Container>
        <Navbar.Brand href="#home">STOCK</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
{name ? <Button variant="outline-info" onClick = {()=>{
              localStorage.removeItem("userInfo");
              navigate('/')
            }}>
          Logout
        </Button> : <Link to='/login'>  <Button variant="outline-success">
          Login
        </Button></Link>}
        

        </Navbar.Collapse>

      </Container>
    </Navbar>
      
    </div>
  )
}

export default Header
