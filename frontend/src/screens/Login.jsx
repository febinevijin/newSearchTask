import React, { useEffect, useState } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/");
    }
  }, [navigate]);

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const config = {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:4000/api/user/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container fluid className="w-50">
        <Row className="rowContainer my-5 ">
          <Col>
          <div className="my-5" >
          <h3>Login</h3>
            <Form onSubmit={submitLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
