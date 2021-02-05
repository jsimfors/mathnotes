import React from 'react';
var allDocuments = { 
    Ovning1f: "1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_",
    Ovning1u: "1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u",
    Ovning2f: "1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq",
    Ovning2u: "12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx"
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



// const Ovning1f = () =>
//   <div>
//   {
//     Object.entries(allDocuments)
//     .map( ([key, value]) => ( {
//         export
//         const :key = () =>
//         <div className="inner-content">
//           <iframe width="90%" height="1350" title="formelblad" src={"https://drive.google.com/file/d/" + value + "/preview"} frameBorder="3" allowFullScreen></iframe>
//         </div>
//       }))
      
//     };


// </div>

//ReactDOM.render(<Example />, document.getElementById('react'));


// for (var key in allDocuments) {
//     const key = () => createElement(key);
// }


// const Ovning1f = () => (
//   <div className="inner-content">
//     <iframe width="90%" height="1350" title="formelblad" src="https://drive.google.com/file/d/1NkkJmxrXGv51zGX_8KivN6eLcUS82FT_/preview" frameBorder="3" allowFullScreen></iframe>
//   </div>
// );

// const Ovning1u = () => (
//     <div className="inner-content">
//       <iframe width="90%" height="1350" title="anteckningar"src="https://drive.google.com/file/d/1dfhEtA1uPtglxD1zo-TbnrKYrXodZV0u/preview" frameborder="0" allowtransparency allowfullscreen></iframe>        
//     </div>
//   );

// const Ovning2f = () => (
//     <div className="inner-content">
//       <iframe width="90%" height="1350"  title="formelblad" src="https://drive.google.com/file/d/1eG3ryCb7_WM-p5MHDar4xyc-5N0nlCYq/preview" frameBorder="0" allowFullScreen></iframe>
//     </div>
//   );

// const Ovning2u = () => (
//     <div className="inner-content">
//       <iframe width="90%" height="1350" title="anteckningar" src="https://drive.google.com/file/d/12lTRP9dYUCbH1tsZJx4M6txkaK9RGJHx/preview" frameborder="0" allowtransparency allowfullscreen></iframe>
//     </div>        
//   );
  
export {
    Ovning1f, Ovning1u, Ovning2f, Ovning2u
  }
