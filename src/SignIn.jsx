import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { userRegister } from './actions';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    const { userRegister, history, location: { state } } = this.props;
    fetch(`http://localhost:3000/api/connection/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((user) => {
        NotificationManager.success('', 'Connexion réussie', 3000);
        userRegister(user);
        setTimeout(() => {
          const nextLocation = state ? state.from.pathname : '/adminhome';
          history.push(nextLocation);
        }, 1000);
      })
      .catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'authentification', 3000);
      });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.submitForm}>
          <div className="wrap input">
            <section className="input-content">
              <h2>Connection</h2>
              <div className="input-content-wrap">
                <dl className="inputbox">
                  <dt className="inputbox-title">Login</dt>
                  <dd className="inputbox-content">
                    <input id="login" type="text" name="login" value={login} onChange={this.handleChange} required />
                    <label htmlFor="login" />
                    <span className="underline" />
                  </dd>
                </dl>
                <dl className="inputbox">
                  <dt className="inputbox-title"> Password</dt>
                  <dd className="inputbox-content">
                    <input id="password" type="password" name="password" value={password} onChange={this.handleChange} required />
                    <label htmlFor="password" />
                    <span className="underline" />
                  </dd>
                </dl>
                <div className="btns">
                  <button type="submit" className="btn btn-confirm">Connection</button>
                </div>
              </div>
            </section>
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ userRegister }, dispatch);

export default connect(null, mdtp)(SignIn);
