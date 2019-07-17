import React, { Component } from 'react';
import './AllsAnimals.scss'

class AllsAnimals extends Component {
render() {
  return(
    <div className="Animals">
      <h1>N<span className="under-text">os Animau</span>x</h1>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
      <img src="images/lions.jpg" alt="lions"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/elephant.png" alt="elephant"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/dresseele.jpg" alt="elephant"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/chevaux.jpg" alt="chevaux"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/poney.jpeg" alt="poney"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/caniches.jpg" alt="caniches"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/chevre.jpg" alt="chevre"/>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="images/chameau.jpg" alt="chameau"/>
      </div>
      </div>
    </div>
  )
}
}

export default AllsAnimals;