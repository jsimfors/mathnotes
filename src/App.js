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
  { name: 'home', label: 'Home' },
  {
    name: 'ovning1',
    label: 'Övning 1',
    items: [
      { name: 'f', label: 'Formelblad' },
      { name: 'u', label: 'Förslag på tentauppgifter' },
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
            {/* Content */}
          <div>
          <h1>React Router Simple Starter</h1>
            <ul className="header">
              <li><NavLink exact to="/">Startsida</NavLink> </li>
              <li><NavLink to="/ovning1">Övning 1</NavLink></li>
              {/* <li><NavLink to="/Contact">Contact</NavLink></li> */}
            </ul>
          <div className="content">
            <Route exact path="/" component={Startpage} />
            <Route path="/ovning1" component={Ovning1} />
            {/* <Route path="/contact" component={Contact} /> */}
          </div>
          </div>

            {/* <Route exact path="/" component={Startpage} /> */}
            {/* <Route path="/ovning1/teori" component={Ovning1t} />
            <Route path="/ovning1/uppg" component={O1Uppg} />
            <Route path="/ovning1/losnings" component={O1Losn} /> */}
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
