import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/sidebar'

function App() {

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          {/* <Sidebar/> */}
          Sidebar
        </Col>
        <Col>
          <div className="pageContent">
            PAgecontent
            {/* <Route exact path="/" component={Dashboard} />
            <Route path="/ovning1/teori" component={Ovning1t} /> */}
          </div>
        </Col>
      </Row>
</Container>
  )
  // return (
  //   <div className="App">
  //     <div className="sidebar">
  //       Hello sidebar
  //     </div>
  //     <div className="App-header">
  //       <p>
  //         Welcome!
  //         <Button/>
  //       </p>
  //     </div>
  //   </div>
  // );
}

export default App;
