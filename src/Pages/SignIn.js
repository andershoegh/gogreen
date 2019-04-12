import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../Utils/Firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    authError: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    firebase
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => {
        this.setState({
          authError: err.message
        });
      });
  };

  render() {
    if (this.props.authUser) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>Login</button>
          </div>
          <div>
            {this.state.authError ? <p>{this.state.authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
