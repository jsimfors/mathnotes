import React from 'react';
import {
  Route,
  NavLink,
  useHistory,
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { Container, Row, Col} from 'react-bootstrap';
import './styles.css';
import Startpage from './startpage.js'

const SannstatPage = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  return (
  <Container fluid id="sannstat">
      <Row className="topHeader">
        <Col xs={1} id="wrapperBackButton">
          <div id="backButton" onClick={redirect}>&#60;</div>
        </Col>
        <Col  xs={10} id="text">
          Sannstat.
        </Col>
      </Row>
      <Row>
        <Col sm={3} id="sidebar-wrapper">
          <NavLink to={'/sannstat'}>
            <ListItem className="outside">
                Startsida
            </ListItem>
          </NavLink>
        </Col>
        <Col>
        <div>
          <div className="content">
              <Route exact path="/sannstat" component={Startpage} />
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
export default SannstatPage;
