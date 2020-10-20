import React from 'react';
import '../../innerPages.css'


const Tipspage = () => (
  <div className="inner-content tips">
    <div className="inner-header">
      Pluggtips
    </div>
    <div className="subHeader">
      <a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&ab_channel=3Blue1Brown">
        3Blue1Brown
      </a>
    </div>
    En spellista på YouTube med visuella förklaringar till mycket av det vi gör i denna kursen. Riktigt nice.
    <div className="subHeader">
      <a href="https://kollin.io/course/17/home">
        Kollin
      </a>
    </div>
    Ett verktyg, gjort av några studenter på KTH, som sorterar alla gamla tentauppgifter i typ alla kurser på KTH efter både område och svårighetsgrad. 
    Denna sidan har hjälpt mig sååå mycket! Typiskt nice att hitta de enklaste tentauppgifterna i varje område, så man kan börja med tentatal redan i Modul 1, då blir tröskeln inte så stor när tenta-P väl börjar.
    Också nice, om man är en statistiknörd som jag, att kunna betygsätta svårighetsgraden på alla uppgifter man gör, gå tillbaka och göra om de man tidigare tyckte va svåra, följa sin utveckling. osv osv.
    Det kostar en slant att låsa upp en kurs, om man inte tycker det är värt så är det såklart heeelt ok, alla pluggar på sitt sätt! :) 
    <div className="subHeader">
      <a href="http://bit.ly/stukan">Stukan</a>
    </div>
    Stukan är en sammanfattning av hela kursen, skriven av föreläsare ‎Tâm Đức Vũ‎. Tjusningen med Stukan är att den har väldigt välgjorda lösningsförslag, täcker typ alla områden samt att den innehåller lite humor, vilket värmer gott i pluggtunga tider likt dessa! Passar perfekt om du efter både föreläsningar och övningar fortfarande inte känner att du helt greppar ett område.
  </div>        
);

export default Tipspage;