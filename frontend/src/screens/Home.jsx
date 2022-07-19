import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Search from "../components/Search";
import Display from "../components/Display";
import "./Home.css";
import axios from "axios";
import Header from "../components/Header";

const Home = () => {
  const [dropData, setDropData] = useState();

  const getValue = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/data/getAllData",
        config
      );

      setDropData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          <Header/>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-5">
          <Col lg="6">
            <Search data={dropData} />
          </Col>
        </Row>

        <Row className="my-5">
          
            <Display />
          
        </Row>
      </Container>
    </>
  );
};

export default Home;
