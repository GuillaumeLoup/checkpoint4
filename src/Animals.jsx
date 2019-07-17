import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Animals.scss'

class Animals extends Component {
render() {
  return(
    <div className="Animals">
      <h1>N<span className="under-text">os Animau</span>x</h1>
      <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
      <img src="images/lions.jpg" alt="lions"/>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
      <img src="images/elephant.png" alt="elephant"/>
      </div>
      </div>
      <NavLink activeClassName="active" to="/animaux">
        <button className="see-button" type="button">Voir tous nos d'animaux</button>
      </NavLink>
    </div>
  )
}
}

export default Animals;