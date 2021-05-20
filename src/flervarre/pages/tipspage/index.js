import React from 'react';
import '../../innerPages.css'


const Tipspage = () => (
  <div className="inner-content tips">
    <div className="inner-header">
      Pluggtips
    </div>
    <div className="subHeader">
      <a href="https://www.ludu.co/course/flervarre">
        Ludu
      </a>
    </div>
      Sidan Ludu sammanfattar hela kursen väldigt snyggt och enkelt. Ibland så förenklat att teorin inte riktigt blir heltäckande. Men absolut ett kanon första steg om man känner sig rikslost inom ett område.
    <div className="subHeader">
      <a href="https://kollin.io/course/10/home">
        Kollin
      </a>
    </div>
    Ett verktyg, gjort av några studenter på KTH, som sorterar alla gamla tentauppgifter i typ alla kurser på KTH efter både område och svårighetsgrad. 
    Denna sidan har hjälpt mig sååå mycket! Typiskt nice att hitta de enklaste tentauppgifterna i varje område, så man kan börja med tentatal redan i Modul 1, då blir tröskeln inte så stor när tenta-P väl börjar.
    Också nice, om man är en statistiknörd som jag, att kunna betygsätta svårighetsgraden på alla uppgifter man gör, gå tillbaka och göra om de man tidigare tyckte va svåra, följa sin utveckling. osv osv.
    Obs! Det kostar en slant att låsa upp en kurs. 
  <div className="subHeader">
      <a href="http://ingforum.haninge.kth.se/armin/AR_11_12/SF1626/dirfler11_12.html">
        Armins teoriblad
      </a>
  </div>
    Armins teoriblad går igenom typ alla områden du kan tänka dig, ofta på ganska detaljerad nivå. Riktigt nice! Innehåller även exempeluppgifter med lösningsförslag.
  
    <div className="subHeader">
      <a href="http://www.math.kth.se/~ekola/flervarre.html">
        Tommys teoriblad
      </a>
    </div>
  Även Tommy har gjort en sida med massa olika sammanfattningar till flervarrens alla områden. Själva hemsidan må ha några år på nacken, men sammanfattningarna här är faktiskt riktigt bra! Tydliga och lättlästa. Något kortare än Armins.
  
  <div className="subHeader">
      <a href="https://www.geogebra.org/3d/">
        Geogebra 3D
      </a>
    </div>
  Ni vet att jag gillar att visualisera grejer! Missar aldrig en chans att få skissa upp en skärning eller ett optimeringsproblem i Geogebra 3D :-)

  <div className="subHeader">
      <a href="http://wolframalpha.com/">
        Wolfram Alpha
      </a>
    </div>
    Antar, och hoppas, att ni redan har koll på Wolfram. Superverktyg för att dubbelkolla sina integraler och ekvationer. Ibland när man är långt intrasslad i sina lösningar, och inte fattar varför man inte får samma svar som facit, är Wolfram precis vad man behöver. Gotta in skiten där och se steg för steg var du tappade bort den där sketna x2-termen.
    <div className="subHeader">
      <a href="https://www.youtube.com/watch?v=TrcCbdWwCBc&list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7">
        3Blue1Brown @ Khan Academy
      </a>
    </div>
      I algebran tipsade jag er om att kika på 3Blue1Brown's fantastiska algebra-spellista. Han har faktiskt gjort en för <i>Multivariable calculus</i> med. Den är inte riktigt lika vass som den i algebran, och avsnitten är mycket längre. Men ett bra ställe att kika på om man vill ha bättre visuel förståelse inom ett område.
    <div className="subHeader">
      <a href="https://www.derivative-calculator.net/">
        Derivative Calculator
      </a>
    </div>
    En sida för att beräkna derivata. Du gottar in din funktion - sidan beräknar derivatan. Du kan även se exakt alla mellansteg, och vilka deriveringsregler som används var. (Något man inte kan göra på Wolfram-alpha utan att betala för deras pro-version). Ni ska såklart inte sluta derivera för hand, men om något blir fel så kan ni dubbelkolla vilken av alla inre produkter i kedjeregeln det va ni tappade bort.
  
    <div className="subHeader">
      <a href="https://www.integral-calculator.com/">
      Integral Calculator
      </a>
    </div>
    Vår egen tids Jesus (skaparen till Derivate Calculator) har även skapat en integral-räknare. Ett perfekt ställe att dubbelkolla sina uträkningar på, precis som på deriverings-sidan så kan man helt gratis se alla steg, och alla regler, som används för att komma fram till lösningen.
    
    <div className="subHeader">
    <a href="https://kollin-exams.s3.eu-north-1.amazonaws.com/resources/a4804fbde96e7b380b3426df49b37493-Kollin%20appendix%20flervariabelanalys%20VT20%20-%20Tam%20Vu.pdf">
      Klassiska Enkelintegraler
      </a>
      </div>
      Att ha koll på klassiska enkelintegraler är ett viktigt hjälpmedel för att lösa många uppgifter även i flervarren. Är man intresserad av att klara tentan så borde man plugga in dessa likt glosor. De kan ofta dyka upp som delar av svårare multipelintegraler.
      Det finns många olika sammanfattningar av viktiga integraler där ute, den jag länkar här tycker jag är riktigt bra!
      </div>
);

export default Tipspage;