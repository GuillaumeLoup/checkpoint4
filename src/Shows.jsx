import React, { Component } from 'react';
import './Shows.scss';

class Shows extends Component {
  constructor(props){
    super(props);
    this.state={
      shows: [],
    }
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/shows`)
    .then(res => res.json())
    .then(shows => this.setState({
      shows
    }))
  }
  render() {

    return(
      <div className="Shows">
        <h1>N<span className="under-text">os Spectacle</span>s</h1>
  
       {
         this.state.shows.map(show => 
         <div>

           <h1>{show.name}</h1>
           <p>prix par adulte: {show.adultprice}</p>
           <p>prix par enfant: {show.childrenprice}</p>
           <img src={`/images/${show.picture}`} alt=""/>
           <p>{show.description}</p>
           <hr />
         </div>)
       }
      
      </div>
    )
    }
  }

export default Shows;
