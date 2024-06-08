import React, { useState } from "react";
import "./Login.css";
import loginPicture from "../../../src/Images/secuirePicture.png";
import { Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleUserSignIn, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[filed] = value;

    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  // Handler Google signIn
  const handleGoogleSignIn = () => {
    googleUserSignIn(location, navigate);
  };

  return (
    <div className="container mb-5">
      <div className="row mt-5 d-flex align-items-center">
        <div className="col-lg6 col-md-6 col-12">
          <img width="100%" src={loginPicture} alt="" />
        </div>
        <div className="col-lg6 col-md-6 col-12 mb-5">
          <div>
            <div>
              <h4
                style={{ color: "#212529" }}
                className="fw-bold text-center my-5"
              >
                PLEASE LOGIN
              </h4>
              <p className="error">{authError}</p>
            </div>

            <div>
              {!isLoading && (
                <>
                  {" "}
                  <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter Email *"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password *"
                        required
                      />
                    </Form.Group>

                    <Button
                      className="login-btn mt-4"
                      variant="inherits"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                    <button
                      className="route-btn"
                      variant="text"
                      style={{ color: "#585C5F" }}
                    >
                      Don't have an account? Please register
                    </button>
                  </NavLink>
                  <br />
                 
                </>
              )}

              {isLoading && <Spinner animation="grow" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
