import React from 'react';
import Button from 'react';
import {
  NavLink
  } from "react-router-dom";
// import '../../innerPages.css';


const Startpage = () => (
  <div className="inner-content startpage">
    <div className="inner-header">Välkommen till SF1624 Algebra &amp; Geometri</div>
    På denna sida finns anteckningar samt formelblad till alla mina övningar.
    Formelbladen innehåller det du behöver för att ta dig igenom respektive övning, 
    så läs gärna igenom dem redan innan övningen.
    <br/><br/>
      Notera att med start övningen den 11/11 kommer alla övningar och seminarier ske digitalt, via zoom.<br/>
      Länken är alltid: <a href="https://kth-se.zoom.us/j/61375116016">https://kth-se.zoom.us/j/61375116016</a><br/>
      <br/>
      Jag assar nu (P2 HT2020) Media och OPEN, <a href="https://cloud.timeedit.net/kth/web/public01/ri161XQ5535Z55Qv2304X3Z6y7Y720Y17Y75Y5gQ0029Q7.html">klicka här</a> för det exakta schemat.
    <br/>
    <br/>
    Johanna Simfors, <i>simfors@kth.se</i>
  </div>        
);

export default Startpage;