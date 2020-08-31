import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Ovning1 from './pages/ovning1'

const items = [
  { name: 'home', label: 'Home', link: '/home', expand:false },
  {
    name: 'ovning1',
    label: 'Övning 1',
    link: '/ovning1',
    expand:true,
    items: [
      { name: 'f', label: 'Formelblad', link: '/ovning1', expand:false },
      { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning1', expand:false },
    ],
  }
]

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <Sidebar items={items} />
          </Col>
          <Col>
          <div>
            <div className="content">
              <Route exact path="/home" component={Startpage} />
              <Route path="/ovning1" component={Ovning1} />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
