import React from 'react';
// f-variables kept in code, if I want to re-add formulera sheets in future :-)
var allDocuments = { 
    Ovning1u: "12VBYp_47iVmRchP-D6FloXQwRJtdtnLJ",
    Ovning1f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning2u: "1wLeqvKre4TA1owPu0Qq3f2zzVaxnFUAC",
    Ovning2f: {"Link 1": "https://some_link"},
    Ovning3u: "1CdranUAwit_K_fIvPdmHOprb9EH6_-ky",
    Ovning3f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning4u: "1yxjEvecQqxxFB4o2PFdagPnTWhmM8c9a",
    Ovning4f: {"Link 1": "https://some_link", "Link 2": "https://some_link", "Link 3": "https://some_link"},
    Ovning5u: "1q4jwpoMuTw5moahVi3kdjAweIauPEZTa",
    Ovning5f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning6u: "1SMb1oeITBizttbO-N6kPPO9DUAbQJRsL",
    Ovning6f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning7u: "14FTkk4qxCpgKqSno3Wn7bAsQFjyL-HC9",
    Ovning7f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning8u: "1i35imyuybAF2bi8EilEmpiQGHWNtdeEX",
    Ovning8f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning9u: "1ZNiDYSr-s8sD3BZxLENKbs0KwVA1Lnj4",
    Ovning9f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning10u: "1Xqx4-X0fTx35Z2h7KrI0XaM5mHp5MDBz",
    Ovning10f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning11u: "1Csrk_anyErnpcibHBR1F1LZvaxfrJaVb",
    Ovning11f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning12u: "12VtUFRUSSnia16umgKXk-0ntMkB26EPV",
    Ovning12f: {"Link 1": "https://some_link", "Link 2": "https://some_link"},
    Ovning13u: "1vUCctTk_RTZvUgAdBfu66LY_pPePwCNF",
    Ovning13f: {"Link 1": "https://some_link", "Link 2": "https://some_link"}
    };


function createUElement(driveID){
    return(
        <div className="inner-content">
          <iframe width="100%" height="1350" title="formelblad" src={"https://drive.google.com/file/d/" + driveID + "/preview"} frameBorder="3" allowFullScreen></iframe>
        </div>
      );
}

function createFElement(linksDict){
  // Kept in code if I want to re-add custom formula pages in future
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

const Ovning1u = () => createUElement(allDocuments.Ovning1u);
const Ovning2u = () => createUElement(allDocuments.Ovning2u);
const Ovning3u = () => createUElement(allDocuments.Ovning3u);
const Ovning4u = () => createUElement(allDocuments.Ovning4u);
const Ovning5u = () => createUElement(allDocuments.Ovning5u);
const Ovning6u = () => createUElement(allDocuments.Ovning6u);
const Ovning7u = () => createUElement(allDocuments.Ovning7u);
const Ovning8u = () => createUElement(allDocuments.Ovning8u);
const Ovning9u = () => createUElement(allDocuments.Ovning9u);
const Ovning10u = () => createUElement(allDocuments.Ovning10u);
const Ovning11u = () => createUElement(allDocuments.Ovning11u);
const Ovning12u = () => createUElement(allDocuments.Ovning12u);
const Ovning13u = () => createUElement(allDocuments.Ovning13u);

export {
    Ovning1u, Ovning2u, Ovning3u, 
    Ovning4u, Ovning5u, Ovning6u, 
    Ovning7u, Ovning8u, Ovning9u,
    Ovning10u, Ovning11u, Ovning12u,
    Ovning13u
  }
