import React, { useState } from 'react';
import './Register.css';
import loginPicture from '../../../src/Images/secuirePicture.png'
import { Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

          const {registerUser, isLoading} = useAuth()
          const [loginData, setLoginData] = useState({})

          const navigate = useNavigate()

          const handleChange = e =>{
               const filed = e.target.name;
               const value = e.target.value;
               const newLoginData = {...loginData}
               newLoginData[filed] = value;
               // console.log(newLoginData)
               setLoginData(newLoginData);
          }

          const handleRegisterSubmit = (e) =>{

               if(loginData.password !== loginData.password2){
                    alert('Your password did not match');
                    return
               }

               registerUser(loginData.email, loginData.password, loginData.name, navigate)
               e.preventDefault();
          }

     return (
          <div className="container mb-5">
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-lg6 col-md-6 col-12">
                <img width="100%" src={loginPicture} alt="" />
                </div>
                <div className="col-lg6 col-md-6 col-12 mb-5">
                    <div>
                        <div>
                        <h4 style={{color:'#212529'}} className="fw-bold text-center my-5">PLEASE REGISTER</h4>
                        </div>

                        <div>
                        {!isLoading && <> <Form onSubmit={handleRegisterSubmit}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                
                                <Form.Control
                                name="name"
                                type="text"
                                onChange={handleChange}
                                placeholder="Your Full Name *"
                                required />
                               
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control 
                                type="email" 
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter Email *" 
                                required />
                               
                            </Form.Group>
                            
                            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                
                                <Form.Control
                                 type="password"
                                 name="password"
                                 onChange={handleChange}
                                 placeholder="Password *"
                                 required />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                
                                <Form.Control 
                                name="password2"
                                type="password"
                                onChange={handleChange} 
                                placeholder="Re-Type Password *" 
                                required />
                            </Form.Group>
                            
                            <Button className="login-btn mt-4" variant="inherits" type="submit">
                                Register
                            </Button>
                            </Form>

                            <NavLink style={{textDecoration:'none'}} to="/login">
                              <button className="route-btn" variant="text" style={{color:'#585C5F'}}>Already have an account? Please login</button>
                              </NavLink>  
                              </>
                         }

                              {isLoading && <Spinner animation="grow" />}

                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
};

export default Register;