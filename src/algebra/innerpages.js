import React from 'react';
var allDocuments = { 
    Ovning1f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning1u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning2f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning2u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning3f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning3u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning4f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning4u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning5f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning5u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning6f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning6u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning7f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning7u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning8f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning8u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning9f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning9u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning10f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning10u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning11f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning11u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning12f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning12u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx",
    Ovning13u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning14u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx"
  };


function createElement(driveID){
    return(
        <div className="inner-content">
          <iframe width="90%" height="1350" title="formelblad" src={"https://drive.google.com/file/d/" + driveID + "/preview"} frameBorder="3" allowFullScreen></iframe>
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
