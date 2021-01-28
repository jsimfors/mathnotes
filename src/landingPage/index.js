import React from "react";
import {Link} from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h3>Landingpage</h3>
      <Link to="/algebra" >Go to algebra</Link>
      <br />
      <Link to="/flervarre" >Go to flervarre</Link>
      <br />
      <Link to="/sannstat" >Go to sannstat</Link>

    </div>
  );
};
export default LandingPage;