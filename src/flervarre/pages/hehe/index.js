import React from 'react';

const Hehepage = () => (
  <div className="content">
    <div className="container-fluid" id="hehe-page">
      <div className="row">
        <div className="col-md-12">
          <div className="inner-content" id="startpage">
            <img alt="hehe" src={require('../../imgs/' + Math.floor(Math.random()*(19)+1) + '.jpg')} />
          </div>        
        </div>
      </div>
    </div>
  </div>
);

export default Hehepage;