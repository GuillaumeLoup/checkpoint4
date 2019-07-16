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
       {
         this.state.shows.map(show => <div>
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
