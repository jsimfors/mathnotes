import React from 'react';
import sannimg1 from './sannstat_1.png';
import sannimg2 from './sannstat_2.png';
import sannimg3 from './sannstat_3.png';

const Startpage = () => (
  <div className="inner-content startpage">
    <div className="inner-header">Välkommen till SF19XY Sannolikhetsteori &amp; Statistik</div>
      Jag assar inte någon sannstat-kurs just nu, men tänkte berätta att jag gjort en rejäl sammanfattning av hela kursen, alltså verkligen alla viktiga områden, till hemsidan <a href="https://kollin.io/course/24/">Kollin.io</a>.
      Så om ni använder den sidan - ta en titt! Tror dock det mesta ligger bakom Kollins betalvägg. Detta är inte reklam eller nåt lol, ville bara tipsa! Kan ej publicera allt här pga kontraktbrott och obror. Men här är ett litet smakprov för den nyfikne.
    <div className="img-container">
      <img src={sannimg3} alt="logo" />
      <img src={sannimg1} alt="logo" />
      <img src={sannimg2} alt="logo" />
    </div>
  </div>        
);

export default Startpage;