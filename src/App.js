import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './App.css';
import Sidebar from './algebra/components/sidebar'
import Startpage from './algebra/pages/startpage'
import algApp from './algebra/algApp';
import multApp from './multApp';
import sannApp from './sannApp';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col>
          <Route exact path="/">
            {/* Startpage */}
            Hello welcome!
          <NavLink to={'/algebra'}>
            <Button variant="warning">Algebra & Geometri</Button>
          </NavLink> 
          <NavLink to={'flervarre'}>
            <Button variant="warning">Flervariabelanalys</Button>
          </NavLink> 
          <NavLink to={'sannstat'}>
            <Button variant="warning">Sannolikhetsteori & Statistik</Button>
          </NavLink> 
          </Route>
          <Route path="/algebra" component={algApp} />
          <Route path="/flervarre" component={multApp} />
          <Route path="/sannstat" component={sannApp} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
