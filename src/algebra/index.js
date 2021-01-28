import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  useHistory,
  Link,
  Switch
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Tipspage from './pages/tipspage'
import Hehepage from './pages/hehe'
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
import Ovning13u from './pages/ovning13/u.js'
import Ovning14u from './pages/ovning14/u.js'


const items = [
  { name: 'ovning1', label: '1. Grundläggande Vektoralgebra & Linjer ', link: '',
    items: [
      { name: 'f', label: 'Formelblad', link: '/algebra/ovning1/f.js' },
      { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning1/u.js' },
    ],
  },

  { name: 'ovning2', label: '2. Plan, Ekvationssystem & Gausselimination ', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning2/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning2/u.js' },
  ],
  },

  { name: 'ovning3', label: '3. Matrisaritmetik & Gausselimination forts.', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning3/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning3/u.js' },
    ],
  }, 
  
  { name: 'ovning4', label: '4. Inversmatriser', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning4/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning4/u.js' },
    ],
  },  
  
  { name: 'ovning5', label: '5. Linjärkombination, Linjärt Oberoende & Delrum', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning5/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning5/u.js' },
    ],
  },

  { name: 'ovning6', label: '6. Determinanten', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning6/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning6/u.js' },
    ],
  },

  { name: 'ovning7', label: '7. Linjära Avbildningar', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning7/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning7/u.js' },
  ],
  },

  { name: 'ovning8', label: '8. Bildrum & Nollrum', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning8/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning8/u.js' },
  ],
  },

  { name: 'ovning9', label: '9. Baser & Ortogonala Komplement', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning9/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning9/u.js' },
  ],
  },

  { name: 'ovning10', label: '10. Gram Schmidt & MKM', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning10/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning10/u.js' },
  ],
  },

  { name: 'ovning11', label: '11. Egenvektorer, Egenvärden & Diagonalisering', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning11/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning11/u.js' },
  ],
  },

  { name: 'ovning12', label: '12. Linjära Avbildningar i Olika Baser & Kvadratisk Form', link: '',
  items: [
    { name: 'f', label: 'Formelblad', link: '/algebra/ovning12/f.js' },
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning12/u.js' },
  ],
  },
  { name: 'ovning13', label: '13. Repetitionsövning 1', link: '',
  items: [
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning13/u.js' },
  ],
  },
  { name: 'ovning14', label: '14. Repetitionsövning 2', link: '',
  items: [
    { name: 'u', label: 'Anteckningar från övning', link: '/algebra/ovning14/u.js' },
  ],
  },  
]

const AlgebraPage = () => {
    let history = useHistory();

    const redirect = () => {
      history.push('/')
    }


  return (
    <BrowserRouter>
      <Container fluid id="algebra">
        <Row className="topHeader">
          <Col sm={1}>
            <Button variant="dark" onClick={redirect}><text>&#8678;</text></Button>
          </Col>
          <Col sm={11} id="text">
            SF1624 ALGEBRA &#038; GEOMETRI
          </Col>
        </Row>
        <Row>
          <Col sm={3} id="sidebar-wrapper">
            <NavLink to={'/algebra'}>
              <ListItem className="outside">
                  Algebra Startsida
              </ListItem>
            </NavLink>
            <Sidebar items={items} />
            <NavLink to={'/algebra/tips'}>
              <ListItem className="outside">
                  Algebra pluggtips
              </ListItem>
            </NavLink>
          <NavLink to={'/algebra/hehe'}>
            <ListItem className="outside" id="hehe">
            <img alt="hehe" src={require('./imgs/logo192.png')} />
              </ListItem>
          </NavLink>

          </Col>
          <Col>
          <div>
            <div className="content">
                <Route exact path="/algebra" component={Startpage} />
                <Route path="/algebra/ovning1/f.js" component={Ovning1f} />
                <Route path="/algebra/ovning1/u.js" component={Ovning1u} />
                <Route path="/algebra/ovning2/f.js" component={Ovning2f} />
                <Route path="/algebra/ovning2/u.js" component={Ovning2u} />
                <Route path="/algebra/ovning3/f.js" component={Ovning3f} />
                <Route path="/algebra/ovning3/u.js" component={Ovning3u} />
                <Route path="/algebra/ovning4/f.js" component={Ovning4f} />
                <Route path="/algebra/ovning4/u.js" component={Ovning4u} />
                <Route path="/algebra/ovning5/f.js" component={Ovning5f} />
                <Route path="/algebra/ovning5/u.js" component={Ovning5u} />
                <Route path="/algebra/ovning6/f.js" component={Ovning6f} />
                <Route path="/algebra/ovning6/u.js" component={Ovning6u} />
                <Route path="/algebra/ovning7/f.js" component={Ovning7f} />
                <Route path="/algebra/ovning7/u.js" component={Ovning7u} />
                <Route path="/algebra/ovning8/f.js" component={Ovning8f} />
                <Route path="/algebra/ovning8/u.js" component={Ovning8u} />
                <Route path="/algebra/ovning9/f.js" component={Ovning9f} />
                <Route path="/algebra/ovning9/u.js" component={Ovning9u} />
                <Route path="/algebra/ovning10/f.js" component={Ovning10f} />
                <Route path="/algebra/ovning10/u.js" component={Ovning10u} />
                <Route path="/algebra/ovning11/f.js" component={Ovning11f} />
                <Route path="/algebra/ovning11/u.js" component={Ovning11u} />
                <Route path="/algebra/ovning12/f.js" component={Ovning12f} />
                <Route path="/algebra/ovning12/u.js" component={Ovning12u} />
                <Route path="/algebra/ovning13/u.js" component={Ovning13u} />
                <Route path="/algebra/ovning14/u.js" component={Ovning14u} />
                <Route path="/algebra/tips" component={Tipspage} />
                <Route path="/algebra/hehe" component={Hehepage} />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default AlgebraPage;
