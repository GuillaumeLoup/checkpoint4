import React, { Component } from 'react';
import './Animals.scss'

class Animals extends Component {
render() {
  return(
    <div className="Animals">
      <h1>Nos Animaux</h1>
      <img src="images/lions.jpg" alt="lions"/>
      <img src="images/elephant.png" alt="elephant"/>
      <button>Voir tous nos d'animaux</button>
    </div>
  )
}
}

export default Animals;