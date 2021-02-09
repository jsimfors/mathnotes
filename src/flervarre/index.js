import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  useHistory,
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Tipspage from './pages/tipspage'
import {
  Ovning1u, Ovning2u, Ovning3u, 
  Ovning4u, Ovning5u, Ovning6u, 
  Ovning7u, Ovning8u, Ovning9u,
  Ovning10u, Ovning11u, Ovning12u,
  Ovning13u 
} from './innerpages.js'

var allOvningsData = {
  'ovning1':'1. Skissa & Beskriva Mängder',
  'ovning2':'2. Kroklinjiga Koordinatsystem & Parametrisering',
  'ovning3':'3. Nivåkurvor & Gränsvärden.',
  'ovning4':'4. Partiella derivator',
  'ovning5':'5. Gradient & Riktningsderivata',
  'ovning6':'6. Taylors Formel,  Implicita funktioner & Extremvärden',
  'ovning7':'7. Optimering',
  'ovning8':'8. Dubbelintegraler',
  'ovning9':'9. Trippelintegraler & Generaliserade integraler',
  'ovning10':'10. Vektorfält & Kurvintegraler',
  'ovning11':'11. Yt- & Flödesintegraler',
  'ovning12':'12. Vektoranalysidentiteter & Greens formel',
  'ovning13':'13. Gauss sats & Stokes sats'
}

const items = [];
Object.keys(allOvningsData).map(key => 
  items.push(
    { name: key, label: allOvningsData[key], link: '',
    items:
    [
      { name: 'u', label: 'Anteckningar från övning', link: '/flervarre/' + key + '/u.js' },
    ]
    }
  )
)

const FlervarrePage  = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  return (
    <BrowserRouter>
      <Container fluid id="flervarre">
        <Row className="topHeader">
          <Col xs={1} id="wrapperBackButton">
            <div id="backButton" onClick={redirect}>&#60;</div>
          </Col>
          <Col  xs={10} id="text">
            Flervarre.
          </Col>
        </Row>
        <Row>
          <Col sm={3} id="sidebar-wrapper">
            <NavLink to={'/flervarre'}>
              <ListItem className="outside">
                  Flervarre Startsida
              </ListItem>
            </NavLink>
            <Sidebar items={items} />
            <NavLink to={'/flervarre/tips'}>
              <ListItem className="outside">
                  Flervarre pluggtips
              </ListItem>
            </NavLink>
          </Col>
          <Col>
          <div>
            <div className="content">
                <Route exact path="/flervarre" component={Startpage} />
                <Route path="/flervarre/ovning1/u.js" component={Ovning1u} />
                <Route path="/flervarre/ovning2/u.js" component={Ovning2u} />
                <Route path="/flervarre/ovning3/u.js" component={Ovning3u} />
                <Route path="/flervarre/ovning4/u.js" component={Ovning4u} />
                <Route path="/flervarre/ovning5/u.js" component={Ovning5u} />
                <Route path="/flervarre/ovning6/u.js" component={Ovning6u} />
                <Route path="/flervarre/ovning7/u.js" component={Ovning7u} />
                <Route path="/flervarre/ovning8/u.js" component={Ovning8u} />
                <Route path="/flervarre/ovning9/u.js" component={Ovning9u} />
                <Route path="/flervarre/ovning10/u.js" component={Ovning10u} />
                <Route path="/flervarre/ovning11/u.js" component={Ovning11u} />
                <Route path="/flervarre/ovning12/u.js" component={Ovning12u} />
                <Route path="/flervarre/ovning13/u.js" component={Ovning13u} />
                <Route path="/flervarre/tips" component={Tipspage} />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default FlervarrePage;
