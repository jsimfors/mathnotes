import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem'

import { Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Ovning1f from './pages/ovning1/f.js'
import Ovning1u from './pages/ovning1/u.js'
import Ovning2f from './pages/ovning2/f.js'
import Ovning2u from './pages/ovning2/u.js'


const items = [
  // { name: 'home', label: 'Home', link: '/home' },
  { name: 'ovning1', label: 'Övning 1', link: '/',
    items: [
      { name: 'f', label: 'Formelblad', link: '/ovning1/f.js' },
      { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning1/u.js' },
    ],
  },

  { name: 'ovning2', label: 'Övning 2', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning2/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning2/u.js' },
  ],
  },
  { name: 'ovning3', label: 'Övning 2', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning2/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning2/u.js' },
  ],
  } , { name: 'ovning4', label: 'Övning 2', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning2/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning2/u.js' },
  ],
  },  { name: 'ovning5', label: 'Övning 2', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning2/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning2/u.js' },
  ],
  }
]

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col>
            <h3>Matteanteckningar SF1624</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
          <ListItem>
                <NavLink to={'/home'}>Startsida</NavLink>
            </ListItem>
            <Sidebar items={items} />
          </Col>
          <Col>
          <div>
            <div className="content">
              <Route exact path="/home" component={Startpage} />
              <Route path="/ovning1/f.js" component={Ovning1f} />
              <Route path="/ovning1/u.js" component={Ovning1u} />
              <Route path="/ovning2/f.js" component={Ovning2f} />
              <Route path="/ovning2/u.js" component={Ovning2u} />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
