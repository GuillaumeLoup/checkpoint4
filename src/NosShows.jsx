import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NosShows.scss'

class NosShows extends Component {
render() {
  return(
    <div className="NosShows">
      <h1>N<span className="under-text">os Spectacle</span>s</h1>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
      <img src="images/trapeze.jpg" alt="trapeze"/>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
      <img src="images/feu.jpg" alt="feu"/>
      </div>
      </div>
      <NavLink activeClassName="active" to="/shows">
        <button className="see-button" type="button">Voir tous nos Spectacles</button>
      </NavLink>
    </div>
  )
}
}

export default NosShows;