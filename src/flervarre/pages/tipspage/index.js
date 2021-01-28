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
    Obs! Det kostar en slant att låsa upp en kurs.
    <div className="subHeader">
      <a href="http://bit.ly/stukan">Stukan</a>
    </div>
    Stukan är en sammanfattning av hela kursen, skriven av föreläsare ‎Tâm Đức Vũ‎. Tjusningen med Stukan är att den har väldigt välgjorda lösningsförslag, täcker typ alla områden samt att den innehåller lite humor, vilket värmer gott i pluggtunga tider likt dessa! Passar perfekt om du efter både föreläsningar och övningar fortfarande inte känner att du helt greppar ett område.
    <div className="subHeader">
      <a href="https://www.ludu.co/course/linjar-algebra/">
        Ludu
      </a>
    </div>
      Sidan Ludu sammanfattar hela kursen väldigt snyggt och enkelt! Ibland lite väl förenklat, så att teorin inte riktigt blir heltäckande. Men absolut ett kanon förstasteg om man känner sig rikslost inom ett område.
  <div className="subHeader">
      <a href="http://ingforum.haninge.kth.se/armin/AR_12_13/SF1624/diralgeom12.html">
        Armins teoriblad
      </a>
    </div>
    Armins teoriblad går igenom typ alla områden du kan tänka dig, ofta på ganska detaljerad nivå. Riktigt nice! Innehåller även exempeluppgifter med lösningsförslag.
    <div className="subHeader">
    Online Matrisberäkning
  </div>
    Ni måste såklart lära er beräkna allting för hand, för på tentan kommer ni inte ha några hjälpmedel. Men ibland kan det vara skönt att dubbelkolla ens beräkningar, speciellt om man kör fast och inte fattar var man gör fel. Då är sidorna <a href="http://matrixcalc.org/en/">Matrixcalc.org/eng</a> och <a href="https://matrix.reshish.com/">matrix.reshish.com</a> riktigt nice.
    Där kan man beräkna både matrismultiplikaitoner, determinanter, ta fram egenvärden och radreducera. Men som sagt, använd det bara som ett hjälpmedel att hitta var ni räknat fel, och inte som en ersättare för att räkna själva. 
  </div>
);

export default Tipspage;