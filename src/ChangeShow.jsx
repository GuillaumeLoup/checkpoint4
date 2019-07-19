import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './ChangeShow.scss';

class ChangeShow extends Component{
  constructor(props){
    super(props);
    this.state={
      picture: "",
      name: "",
      description: "",
      adultprice: "",
      childrenprice: "",
    }
  }

 handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

 handleSubmit = (event) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(this.state)
        }
        const url =`http://localhost:3000/api/shows`;
        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error)
            }else{
               
            }
        })
        event.preventDefault();
        NotificationManager.success('', 'Show ajouté !', 3000);
    }
  render() {
    return(
      <div className="ChangeShow">
        <h1>S<span className="under-text">aisie d'un Sho</span>w</h1>
             <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label htmlFor="name" sm={2} size="lg">Nom:</Label>
          <Col sm={10}>
            <Input type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                 placeholder="nom" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="picture" sm={2} size="lg">Photo:</Label>
          <Col sm={10}>
            <Input type="text"
                id="picture"
                name="picture"
                onChange={this.handleChange}
                value={this.state.picture}
                 placeholder="photo" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="adultprice" sm={2} size="lg">Prix par adulte:</Label>
          <Col sm={10}>
            <Input type="text"
                id="adultprice"
                name="adultprice"
                onChange={this.handleChange}
                value={this.state.adultprice}
                 placeholder="prix par adulte" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="childrenprice" sm={2} size="lg">Prix par enfant:</Label>
          <Col sm={10}>
            <Input type="text"
                id="childrenprice"
                name="childrenprice"
                onChange={this.handleChange}
                value={this.state.childrenprice}
                 placeholder="prix par enfant" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="description" sm={2} size="lg">Description:</Label>
          <Col sm={10}>
            <Input type="text"
                id="description"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                 placeholder="description du show" bsSize="lg" />
          </Col>
        </FormGroup>
       <div className="form-data">
              <input className="button-sub" type="submit" value="Envoyer" />
            </div>
      </Form>
      <NotificationContainer />
      <NavLink activeClassName="active" to="/modify/1">
        <button className="put-button" type="button">cliquez ici pour  aller modifier un spectacle</button>
      </NavLink>
      </div>
    )
  }
}

export default ChangeShow;