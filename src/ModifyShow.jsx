import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ModifyShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      name: "",
      description: "",
      adultprice: "",
      childrenprice: "",
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/api/shows/${id}`)
      .then(res => res.json())
      .then(show => this.setState({
        ...show,
      }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    const id = this.props.match.params.id;
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    }
    const url = `http://localhost:3000/api/shows/${id}`;
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error)
        } else {
          alert(`show modifié`)
        }
      })
    event.preventDefault();
    NotificationManager.success('', 'Show modifié !', 3000);
  }
  render() {

    console.log(this.state)
    return (
      <div className="ModifyShow">
        <h1>Saisie d'un Show</h1>
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
          <Label htmlFor="description" sm={2} size="lg">Description</Label>
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
              <input type="submit" value="Envoyer" />
            </div>
      </Form>
      <NotificationContainer />
      </div>
    )
  }
}

export default ModifyShow;