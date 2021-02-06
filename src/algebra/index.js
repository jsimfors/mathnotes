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
  Ovning13u, Ovning14u } from './innerpages.js'

var allOvningsData = {
  'ovning1':'1. Grundläggande Vektoralgebra & Linjer ',
  'ovning2':'2. Plan, Ekvationssystem & Gausselimination ',
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
  'ovning13':'13. Repetitionsövning 1',
  'ovning14':'14. Repetitionsövning 2'
}

const items = [];
Object.keys(allOvningsData).map(key => 
  items.push(
    { name: key, label: allOvningsData[key], link: '',
    items: key=='ovning13'||key=='ovning14'?
    [
      { name: 'u', label: 'Anteckningar från övning', link: '/algebra/' + key + '/u.js' },
    ]
    :
    [
      { name: 'f', label: 'Formelblad', link: '/algebra/' + key + '/f.js' },
      { name: 'u', label: 'Anteckningar från övning', link: '/algebra/' + key + '/u.js' },
    ],
    }
  )
)

const AlgebraPage = () => {
    let history = useHistory();

    const redirect = () => {
      history.push('/')
    }


  return (
    <BrowserRouter>
      <Container fluid id="algebra">
        <Row className="topHeader">
          <Col xs={1} id="wrapperBackButton">
            <div id="backButton" onClick={redirect}>&#60;</div>
          </Col>
          <Col  xs={10} id="text">
            Algebra.
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
              :)
            {/* <img alt="hehe" src={require('./imgs/logo192.png')} /> */}
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
