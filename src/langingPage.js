import React from 'react';
import Button from 'react';

import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';
import './App.css'
// EJ AKTIV
function LandingPage2() {
    return (
        <BrowserRouter>
          <Container fluid>
            <Row>
                <Col>
                <div className="sub-header">  
                {/* TODO: switch CSS style */}
                Välkommen till landingpage
                 <Button>Button</Button>
                </div>         
            </Col>
            </Row>
          </Container>
        </BrowserRouter>
      )
  }

export default LandingPage2;
