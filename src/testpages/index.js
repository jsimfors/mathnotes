import React from "react";
import {Link} from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h3>Landingpage</h3>
      <Link to="/algebra" >Go to algebra</Link>
      <br />
      <Link to="/newflervarre" >Go to flervarre</Link>

    </div>
  );
};
export default LandingPage;