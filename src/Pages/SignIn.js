import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../Utils/Firebase";
import "./SignIn.css";
import { Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import GreenBgImg from "../images/backgroundGreen.png";
import RedBgImg from "../images/backgroundRed.png";

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
    const bgImg = this.props.isGreen ? GreenBgImg : RedBgImg;
    if (this.props.authUser) return <Redirect to="/" />;
    document.body.style.backgroundImage = `url(${bgImg})`;
    return (
      <Container className="formWrapper">
        <form className="transparent" onSubmit={this.handleSubmit}>
          <H1>Sign In to GoForGreen</H1>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field btn-wrapper">
            <button className="btn-large pink lighten-1 z-depth-0">
              Login
            </button>
          </div>
          <div className="center red-text">
            {this.state.authError ? <p>{this.state.authError}</p> : null}
          </div>
        </form>
      </Container>
    );
  }
}

export default SignIn;
