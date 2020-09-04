import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem'

import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Ovning1f from './pages/ovning1/f.js'
import Ovning1u from './pages/ovning1/u.js'
import Ovning2f from './pages/ovning2/f.js'
import Ovning2u from './pages/ovning2/u.js'
import Ovning3f from './pages/ovning3/f.js'
import Ovning3u from './pages/ovning3/u.js'
import Ovning4f from './pages/ovning4/f.js'
import Ovning4u from './pages/ovning4/u.js'
import Ovning5f from './pages/ovning5/f.js'
import Ovning5u from './pages/ovning5/u.js'
import Ovning6f from './pages/ovning6/f.js'
import Ovning6u from './pages/ovning6/u.js'
import Ovning7f from './pages/ovning7/f.js'
import Ovning7u from './pages/ovning7/u.js'
import Ovning8f from './pages/ovning8/f.js'
import Ovning8u from './pages/ovning8/u.js'
import Ovning9f from './pages/ovning9/f.js'
import Ovning9u from './pages/ovning9/u.js'
import Ovning10f from './pages/ovning10/f.js'
import Ovning10u from './pages/ovning10/u.js'
import Ovning11f from './pages/ovning11/f.js'
import Ovning11u from './pages/ovning11/u.js'
import Ovning12f from './pages/ovning12/f.js'
import Ovning12u from './pages/ovning12/u.js'


const items = [
  // { name: 'home', label: 'Home', link: '/home' },
  { name: 'ovning1', label: 'Övning 1', link: '',
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

  { name: 'ovning3', label: 'Övning 3', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning3/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning3/u.js' },
    ],
  }, 
  
  { name: 'ovning4', label: 'Övning 4', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning4/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning4/u.js' },
    ],
  },  
  
  { name: 'ovning5', label: 'Övning 5', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning5/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning5/u.js' },
    ],
  },

  { name: 'ovning6', label: 'Övning 6', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning6/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning6/u.js' },
    ],
  },

  { name: 'ovning7', label: 'Övning 7', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning7/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning7/u.js' },
  ],
  },

  { name: 'ovning8', label: 'Övning 8', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning8/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning8/u.js' },
  ],
  },

  { name: 'ovning9', label: 'Övning 9', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning9/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning9/u.js' },
  ],
  },

  { name: 'ovning10', label: 'Övning 10', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning10/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning10/u.js' },
  ],
  },

  { name: 'ovning11', label: 'Övning 11', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning11/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning11/u.js' },
  ],
  },

  { name: 'ovning12', label: 'Övning 12', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/ovning12/f.js' },
    { name: 'u', label: 'Förslag på tentauppgifter', link: '/ovning12/u.js' },
  ],
  },


  
]

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col>
            <div className="header">
              Matteanteckningar SF1624
            </div>
            <div className="sub-header">
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
          <ListItem>
              <NavLink id="start" to={'/home'}>Startsida</NavLink>
          </ListItem>
          <Sidebar items={items} />
          <ListItem>
              <NavLink id="start" to={'/home'}>Algebra pluggtips</NavLink>
          </ListItem>
          <ListItem>
              <NavLink id="start" to={'/home'}>Det här svårt</NavLink>
          </ListItem>
          </Col>
          <Col>
          <div>
            <div className="content">
              <Route exact path="/home" component={Startpage} />
              <Route path="/ovning1/f.js" component={Ovning1f} />
              <Route path="/ovning1/u.js" component={Ovning1u} />
              <Route path="/ovning2/f.js" component={Ovning2f} />
              <Route path="/ovning2/u.js" component={Ovning2u} />
              <Route path="/ovning3/f.js" component={Ovning3f} />
              <Route path="/ovning3/u.js" component={Ovning3u} />
              <Route path="/ovning4/f.js" component={Ovning4f} />
              <Route path="/ovning4/u.js" component={Ovning4u} />
              <Route path="/ovning5/f.js" component={Ovning5f} />
              <Route path="/ovning5/u.js" component={Ovning5u} />
              <Route path="/ovning6/f.js" component={Ovning6f} />
              <Route path="/ovning6/u.js" component={Ovning6u} />
              <Route path="/ovning7/f.js" component={Ovning7f} />
              <Route path="/ovning7/u.js" component={Ovning7u} />
              <Route path="/ovning8/f.js" component={Ovning8f} />
              <Route path="/ovning8/u.js" component={Ovning8u} />
              <Route path="/ovning9/f.js" component={Ovning9f} />
              <Route path="/ovning9/u.js" component={Ovning9u} />
              <Route path="/ovning10/f.js" component={Ovning10f} />
              <Route path="/ovning10/u.js" component={Ovning10u} />
              <Route path="/ovning11/f.js" component={Ovning11f} />
              <Route path="/ovning11/u.js" component={Ovning11u} />
              <Route path="/ovning12/f.js" component={Ovning12f} />
              <Route path="/ovning12/u.js" component={Ovning12u} />

            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
