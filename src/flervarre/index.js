import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  useHistory,
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../App.css';
import Sidebar from './components/sidebar'
import Startpage from './pages/startpage'
import Tipspage from './pages/tipspage'
import Hehepage from './pages/hehe'
import {
  Ovning1f, Ovning1u, Ovning2f, Ovning2u, Ovning3f, Ovning3u, 
  Ovning4f, Ovning4u, Ovning5f, Ovning5u, Ovning6f, Ovning6u, 
  Ovning7f, Ovning7u, Ovning8f, Ovning8u, Ovning9f, Ovning9u,
  Ovning10f, Ovning10u, Ovning11f, Ovning11u, Ovning12f, Ovning12u,
  Ovning13u } from './innerpages.js'

var allOvningsData = {
  'ovning1':'1. Flervarre1 ',
  'ovning2':'2. Flervarre 2 osv... ',
  'ovning3':'3. Matrisaritmetik & Gausselimination forts.',
  'ovning4':'4. Inversmatriser',
  'ovning5':'5. Linjärkombination, Linjärt Oberoende & Delrum',
  'ovning6':'6. Determinanten',
  'ovning7':'7. Linjära Avbildningar',
  'ovning8':'8. Bildrum & Nollrum',
  'ovning9':'9. Baser & Ortogonala Komplement',
  'ovning10':'10. Gram Schmidt & MKM',
  'ovning11':'11. Egenvektorer, Egenvärden & Diagonalisering',
  'ovning12':'12. Linjära Avbildningar i Olika Baser & Kvadratisk Form',
  'ovning13':'13. Repetitionsövning 1'
}

const items = [];
Object.keys(allOvningsData).map(key => 
  items.push(
    { name: key, label: allOvningsData[key], link: '',
    items: key=='ovning13'||key=='ovning14'?
    [
      { name: 'u', label: 'Anteckningar från övning', link: '/flervarre/' + key + '/u.js' },
    ]
    :
    [
      { name: 'f', label: 'Tillhörande teori', link: '/flervarre/' + key + '/f.js' },
      { name: 'u', label: 'Anteckningar från övning', link: '/flervarre/' + key + '/u.js' },
    ],
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
          <Col sm={1} id="wrapperBackButton">
            {/* <Button onClick={redirect}><text>&#8678;</text></Button> */}
            <div id="backButton" onClick={redirect}>&#60;</div>
          </Col>
          <Col  sm={11} id="text">
            Flervarre.
            {/* SF1624 flervarre &#038; GEOMETRI */}
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
          <NavLink to={'/flervarre/hehe'}>
            <ListItem className="outside" id="hehe">
              :)
            {/* <img alt="hehe" src={require('./imgs/logo192.png')} /> */}
              </ListItem>
          </NavLink>

          </Col>
          <Col>
          <div>
            <div className="content">
                <Route exact path="/flervarre" component={Startpage} />
                <Route path="/flervarre/ovning1/f.js" component={Ovning1f} />
                <Route path="/flervarre/ovning1/u.js" component={Ovning1u} />
                <Route path="/flervarre/ovning2/f.js" component={Ovning2f} />
                <Route path="/flervarre/ovning2/u.js" component={Ovning2u} />
                <Route path="/flervarre/ovning3/f.js" component={Ovning3f} />
                <Route path="/flervarre/ovning3/u.js" component={Ovning3u} />
                <Route path="/flervarre/ovning4/f.js" component={Ovning4f} />
                <Route path="/flervarre/ovning4/u.js" component={Ovning4u} />
                <Route path="/flervarre/ovning5/f.js" component={Ovning5f} />
                <Route path="/flervarre/ovning5/u.js" component={Ovning5u} />
                <Route path="/flervarre/ovning6/f.js" component={Ovning6f} />
                <Route path="/flervarre/ovning6/u.js" component={Ovning6u} />
                <Route path="/flervarre/ovning7/f.js" component={Ovning7f} />
                <Route path="/flervarre/ovning7/u.js" component={Ovning7u} />
                <Route path="/flervarre/ovning8/f.js" component={Ovning8f} />
                <Route path="/flervarre/ovning8/u.js" component={Ovning8u} />
                <Route path="/flervarre/ovning9/f.js" component={Ovning9f} />
                <Route path="/flervarre/ovning9/u.js" component={Ovning9u} />
                <Route path="/flervarre/ovning10/f.js" component={Ovning10f} />
                <Route path="/flervarre/ovning10/u.js" component={Ovning10u} />
                <Route path="/flervarre/ovning11/f.js" component={Ovning11f} />
                <Route path="/flervarre/ovning11/u.js" component={Ovning11u} />
                <Route path="/flervarre/ovning12/f.js" component={Ovning12f} />
                <Route path="/flervarre/ovning12/u.js" component={Ovning12u} />
                <Route path="/flervarre/ovning13/u.js" component={Ovning13u} />
                <Route path="/flervarre/tips" component={Tipspage} />
                <Route path="/flervarre/hehe" component={Hehepage} />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default FlervarrePage;
