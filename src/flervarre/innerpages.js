import React from 'react';
var allDocuments = { 
  
    "Ovning1u": "12VBYp_47iVmRchP-D6FloXQwRJtdtnLJ",
    Ovning1f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning2u: "1wLeqvKre4TA1owPu0Qq3f2zzVaxnFUAC",
    Ovning2f: {"ludu": "https://www.ludu.co/course/flervarre"},
    Ovning3u: "1CdranUAwit_K_fIvPdmHOprb9EH6_-ky",
    Ovning3f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning4u: "1yxjEvecQqxxFB4o2PFdagPnTWhmM8c9a",
    Ovning4f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre", "Link 3": "https://www.ludu.co/course/flervarre"},
    Ovning5u: "1q4jwpoMuTw5moahVi3kdjAweIauPEZTa",
    Ovning5f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning6u: "1SMb1oeITBizttbO-N6kPPO9DUAbQJRsL",
    Ovning6f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning7u: "14FTkk4qxCpgKqSno3Wn7bAsQFjyL-HC9",
    Ovning7f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning8u: "1i35imyuybAF2bi8EilEmpiQGHWNtdeEX",
    Ovning8f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning9u: "1ZNiDYSr-s8sD3BZxLENKbs0KwVA1Lnj4",
    Ovning9f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning10u: "1Xqx4-X0fTx35Z2h7KrI0XaM5mHp5MDBz",
    Ovning10f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning11u: "1Csrk_anyErnpcibHBR1F1LZvaxfrJaVb",
    Ovning11f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning12u: "12VtUFRUSSnia16umgKXk-0ntMkB26EPV",
    Ovning12f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"},
    Ovning13u: "1vUCctTk_RTZvUgAdBfu66LY_pPePwCNF",
    Ovning13f: {"ludu": "https://www.ludu.co/course/flervarre", "Link 2": "https://www.ludu.co/course/flervarre"}
    };


function createUElement(driveID){
    return(
        <div className="inner-content">
          <iframe width="100%" height="1350" title="formelblad" src={"https://drive.google.com/file/d/" + driveID + "/preview"} frameBorder="3" allowFullScreen></iframe>
        </div>
      );
}

function createFElement(linksDict){
  return(
    <div className="inner-content" id="link-page">
    { Object.keys(linksDict).map((item, i) => (
      <div>
        <a href={linksDict[item]}>{item}</a>
      </div>
    ))}
  </div>
    );
}

const Ovning1f = () => createFElement(allDocuments.Ovning1f);
const Ovning1u = () => createUElement(allDocuments.Ovning1u);
const Ovning2f = () => createFElement(allDocuments.Ovning2f);
const Ovning2u = () => createUElement(allDocuments.Ovning2u);
const Ovning3f = () => createFElement(allDocuments.Ovning3f);
const Ovning3u = () => createUElement(allDocuments.Ovning3u);
const Ovning4f = () => createFElement(allDocuments.Ovning4f);
const Ovning4u = () => createUElement(allDocuments.Ovning4u);
const Ovning5f = () => createFElement(allDocuments.Ovning5f);
const Ovning5u = () => createUElement(allDocuments.Ovning5u);
const Ovning6f = () => createFElement(allDocuments.Ovning6f);
const Ovning6u = () => createUElement(allDocuments.Ovning6u);
const Ovning7f = () => createFElement(allDocuments.Ovning7f);
const Ovning7u = () => createUElement(allDocuments.Ovning7u);
const Ovning8f = () => createFElement(allDocuments.Ovning8f);
const Ovning8u = () => createUElement(allDocuments.Ovning8u);
const Ovning9f = () => createFElement(allDocuments.Ovning9f);
const Ovning9u = () => createUElement(allDocuments.Ovning9u);
const Ovning10f = () => createFElement(allDocuments.Ovning10f);
const Ovning10u = () => createUElement(allDocuments.Ovning10u);
const Ovning11f = () => createFElement(allDocuments.Ovning11f);
const Ovning11u = () => createUElement(allDocuments.Ovning11u);
const Ovning12f = () => createFElement(allDocuments.Ovning12f);
const Ovning12u = () => createUElement(allDocuments.Ovning12u);
const Ovning13f = () => createFElement(allDocuments.Ovning13f);
const Ovning13u = () => createUElement(allDocuments.Ovning13u);

export {
    Ovning1f, Ovning1u, Ovning2f, Ovning2u, Ovning3f, Ovning3u, 
    Ovning4f, Ovning4u, Ovning5f, Ovning5u, Ovning6f, Ovning6u, 
    Ovning7f, Ovning7u, Ovning8f, Ovning8u, Ovning9f, Ovning9u,
    Ovning10f, Ovning10u, Ovning11f, Ovning11u, Ovning12f, Ovning12u,
    Ovning13u, Ovning13f
  }
