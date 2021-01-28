import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Button} from 'react-bootstrap';
import './styles.css'


const LandingPage = () => {
  return (
    <Container fluid id="landing">
      <Row>
        <Col className="inner-content">
          Välj din kurs:
          <div className="buttons">
            <Link to="/algebra">
              <Button variant="warning">SF1624 Algebra</Button>
            </Link>
            <Link to="/algebra" >
              <Button variant="warning">SF1626 Flervarre</Button>
            </Link>
            <Link to="/algebra" >
              <Button variant="warning">SF16XY Sannstat</Button>
            </Link>
          </div>
      </Col>
      </Row>
  </Container>
  );
};
export default LandingPage;