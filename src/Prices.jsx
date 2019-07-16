import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Prices extends Component {
  constructor(props){
    super(props);
    this.state={
      shows: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/shows/price`)
    .then(res => res.json())
    .then(shows => this.setState({
      shows
    }))
  }
render() {
  console.log(this.state.shows)
  return(
    <div className="Prices">
      <h1>Nos Tarifs</h1>
       <Table dark>
        <thead>
          <tr>
            <th></th>
            <th>Spectacle</th>
            <th>Prix/enfant</th>
            <th>Prix/adulte</th>
          </tr>
        </thead>
        {
        
        this.state.shows.map(show => <tbody>
          <tr>
            <th scope="row"></th>
            <td>{show.name}</td>
            <td>{show.childrenprice}</td>
            <td>{show.adultprice}</td>
          </tr>
        </tbody>)
        }
        
      </Table>
      
    </div>
  )
}
}

export default Prices;