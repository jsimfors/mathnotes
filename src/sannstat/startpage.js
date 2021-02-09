import React from 'react';
import sannimg1 from './sannstat_1.png';
import sannimg2 from './sannstat_2.png';
import sannimg3 from './sannstat_3.png';

const Startpage = () => (
  <div className="inner-content startpage">
    <div className="inner-header">Välkommen till SF19XY Sannolikhetsteori &amp; Statistik</div>
      Jag assar inte sannstat just nu, men tänkte berätta att jag gjort en rejäl sammanfattning av hela kursen, alltså verkligen alla viktiga områden, till hemsidan <a href="https://kollin.io/course/24/">Kollin.io</a>.
      Så ni som använder den kommer åt allt där! :) obs inte reklam eller nåt lol, ville bara tipsa! Har ändå lagt ner hjärta och själ i de där sammanfattningarna. 
      Men kan inte lägga upp här, pga kontraktbrott och obror, eftersom jag skrev dem på uppdrag åt dem. Men ville ändå tipsa! Jaa ni fattar!
    <div className="img-container">
      <img src={sannimg3} alt="logo" />
      <img src={sannimg1} alt="logo" />
      <img src={sannimg2} alt="logo" />
    </div>
  </div>        
);

export default Startpage;