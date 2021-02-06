import React from 'react';
import Button from 'react';
import {
  NavLink
  } from "react-router-dom";
// import '../../innerPages.css';


const Startpage = () => (
  <div className="inner-content startpage">
    <div className="inner-header">Välkommen till sidan för SF1626 Flervariabelanalys</div>
    På denna sida finns anteckningar från alla mina övningar.
    Under fliken <i>Formelblad</i> har jag samlat länkar till bra teori att ha koll på inför just den övningen. Så kika gärna igenom det redan innan - så kan vi gotta igenom lite härliga tentauppgifter på en gång tillsammas.
    Under fliken <i>Pluggtips</i> finns mer övergripande tips för hela kursen. Det finns så mycket bra material och sammanfattningar där ute!! Use it wisely! 
    <br/><br/>
      Notera att alla övningar och seminarier sker digitalt, via zoom.<br/>
      Länken är alltid: <a href="https://kth-se.zoom.us/j/64020585715">https://kth-se.zoom.us/j/64020585715</a><br/>
      <br/>
      Jag assar nu (P3 &amp; P4 VT21) CSAMH, <a href="https://cloud.timeedit.net/kth/web/public01/ri107515X13Z0XQ6Z86g3Y60y4026Y1730QgQY6Q562720559Y717.html">klicka här</a> för det exakta schemat.
    <br/>
    <br/>
    Johanna Simfors, <i>simfors@kth.se</i>
  </div>        
);

export default Startpage;