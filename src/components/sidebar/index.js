import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './styles.css'

class Sidebar extends Component {

//   state = {};

  render() {

    let { location } = this.props;

    // let {
    //   location,
    //   backgroundColor,
    //   enableBackgroundImage,
    //   backgroundImage
    // } = this.props;

    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-header">
            <h6>Anteckningar SF1624 HT2020</h6>
          </div>
          <div className="line"></div>
        </div>
        <div className="sidebar-background">
            
           {/* ------ Faktiska listan: */}
           <ul className="nav">
                <li className={location.pathname === '/' ? 'active' : null}>
                <Link to="/">
                    <i className="pe-7s-graph"></i>
                    <p>Dashboard</p>
                </Link>
                </li>
                <li className={this.isPathActive('/ovning1') || this.state.componentMenuOpen ? 'active' : null}>
                <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
                    data-toggle="collapse">
                    <i className="pe-7s-plugin"></i>
                    <p>
                    övning1
                    <b className="caret"></b>
                    </p>
                </a>
                <Collapse in={this.state.componentMenuOpen}>
                    <div>
                    <ul className="nav">
                        <li className={this.isPathActive('/ovning1/teori') ? 'active' : null}>
                        <Link to="/ovning1/teori">Teori</Link>
                        </li>
                        <li className={this.isPathActive('/ovning1/uppg') ? 'active' : null}>
                        <Link to="/ovning1/uppg">Förslag på tentauppgifter</Link>
                        </li>
                        {/* <li className={this.isPathActive('/ovning1/losnings') ? 'active' : null}>
                        <Link to="/ovning1/losnings">Lösningsförslag</Link>
                        </li> */}
                    </ul>
                    </div>
                </Collapse>
                </li>
      </ul>

        </div>
      </div>
    )
  }


  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

// const mapStateToProps = state => ({
//   enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
//   backgroundColor: state.ThemeOptions.backgroundColor,
//   backgroundImage: state.ThemeOptions.backgroundImage
// });

// export default withRouter(
//   connect(mapStateToProps)(SideBar)
// );

export default Sidebar;