import React from 'react';
var allDocuments = { 
    Ovning1f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning1u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning2f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning2u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning3f: "1XDG_98mQfXAcQ8dcjCh0AFOFtP4fGLVI",
    Ovning3u: "1nu2H99_qW2DMo_3TDbfQM1Jo1yRVexJV",
    Ovning4f: "10yrPQ4uxD06yIkiIrdc3OTks-mi4PdSy",
    Ovning4u: "1eUBPLIC1biyyf0Njl2KHb-eDKoBHWJ68",
    Ovning5f: "1lKNGtPY6BsarQQYgivdc6GXM2kQYsou8",
    Ovning5u: "1yuJo4LKJuCC0DHoW5BtGYNLHR9p4LE1o",
    Ovning6f: "1yYFLbqVW_DBeFaI-_uMI8hj1RiGojpPz",
    Ovning6u: "1AE0VaCPRizcgHvNcmWOoCmNQkIrLysHE",
    Ovning7f: "1BklR69gdM40y62NEs-x9lgK8QqqgohQU",
    Ovning7u: "1B-TAvv_PkrQtOQzEzCISl34QC4hQveKi",
    Ovning8f: "1tnamw-qZuu9a_25sYUktqjp7AeKT_qYN",
    Ovning8u: "1DUpkXtSB5iceVlKq9-X4pgZj8IWR0zkN",
    Ovning9f: "1RRHueUl4ZkTmWOQfPUiWFh6dt_f9D9mx",
    Ovning9u: "1DMM3mDqz_6VLZdFZW4KBnw4cOlQPCtyf",
    Ovning10f: "1NhNPWH6xhzxQyIKOj3rl5ECWfnQLpbvf",
    Ovning10u: "10hvTOd01wgu8XLRqAAbV1mR2ksPPxhSu",
    Ovning11f: "18lXJYeE9PRfpeP-G5J3C7tp5drbGgaer",
    Ovning11u: "1I6yeFyUOL5nCnQa9KKgCmuPtPt8Q5VSR",
    Ovning12f: "1iaLWcwohdUSVdzQRUlw7PAbfqFpRhyZw",
    Ovning12u: "1g5q39PLnOgmfujPIt3MTX52XNEs8ChlL",
    Ovning13u: "1ysVGYBttWgo40jEzDoEtjYk0A7P3xjVj",
    Ovning14u: "1lMkkRl-nEWvj9WDUgUnRXNOJt41DwV6G"
  };


function createElement(driveID){
    return(
        <div className="inner-content">
          <iframe width="100%" height="1350" title="formelblad" src={"https://drive.google.com/file/d/" + driveID + "/preview"} frameBorder="3" allowFullScreen></iframe>
        </div>
      );
}

const Ovning1f = () => createElement(allDocuments.Ovning1f);
const Ovning1u = () => createElement(allDocuments.Ovning1u);
const Ovning2f = () => createElement(allDocuments.Ovning2f);
const Ovning2u = () => createElement(allDocuments.Ovning2u);
const Ovning3f = () => createElement(allDocuments.Ovning3f);
const Ovning3u = () => createElement(allDocuments.Ovning3u);
const Ovning4f = () => createElement(allDocuments.Ovning4f);
const Ovning4u = () => createElement(allDocuments.Ovning4u);
const Ovning5f = () => createElement(allDocuments.Ovning5f);
const Ovning5u = () => createElement(allDocuments.Ovning5u);
const Ovning6f = () => createElement(allDocuments.Ovning6f);
const Ovning6u = () => createElement(allDocuments.Ovning6u);
const Ovning7f = () => createElement(allDocuments.Ovning7f);
const Ovning7u = () => createElement(allDocuments.Ovning7u);
const Ovning8f = () => createElement(allDocuments.Ovning8f);
const Ovning8u = () => createElement(allDocuments.Ovning8u);
const Ovning9f = () => createElement(allDocuments.Ovning9f);
const Ovning9u = () => createElement(allDocuments.Ovning9u);
const Ovning10f = () => createElement(allDocuments.Ovning10f);
const Ovning10u = () => createElement(allDocuments.Ovning10u);
const Ovning11f = () => createElement(allDocuments.Ovning11f);
const Ovning11u = () => createElement(allDocuments.Ovning11u);
const Ovning12f = () => createElement(allDocuments.Ovning12f);
const Ovning12u = () => createElement(allDocuments.Ovning12u);
const Ovning13u = () => createElement(allDocuments.Ovning13u);
const Ovning14u = () => createElement(allDocuments.Ovning14u);

export {
    Ovning1f, Ovning1u, Ovning2f, Ovning2u, Ovning3f, Ovning3u, 
    Ovning4f, Ovning4u, Ovning5f, Ovning5u, Ovning6f, Ovning6u, 
    Ovning7f, Ovning7u, Ovning8f, Ovning8u, Ovning9f, Ovning9u,
    Ovning10f, Ovning10u, Ovning11f, Ovning11u, Ovning12f, Ovning12u,
    Ovning13u, Ovning14u
  }
