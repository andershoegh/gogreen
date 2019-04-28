import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../Utils/Firebase";
import "firebase/firestore";
import "./SignUp.css";
import { Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import GreenBgImg from "../images/backgroundGreen.png";
import RedBgImg from "../images/backgroundRed.png";

class SignUp extends Component {
  state = {
    firstName: "",
    secondName: "",
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

    const timeStamp = firebase.getTimeStamp();
    const productObj = {
      greenEnergy: 1,
      redEnergy: 1,
      totalEnergy: 2,
      start: timeStamp,
      end: timeStamp
    };
    const activeObj = {
      "0": false,
      "1": false,
      "2": false,
      "3": false,
      "4": false
    };

    const smartplugObj = {
      greenEnergy: 1,
      redEnergy: 1,
      totalEnergy: 2,
      active: activeObj
    };

    const docData = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      totalEnergy: 2,
      totalGreenEnergy: 1,
      products: {
        washingMachine: productObj,
        dryer: productObj,
        vacuum: productObj,
        dishwasher: productObj,
        smartplug: smartplugObj
      }
    };

    firebase
      .doSignUpWithEmailAndPassword(this.state.email, this.state.password)
      .then(cred => {
        console.log(docData);
        return firebase.db
          .collection("users")
          .doc(cred.user.uid)
          .set(docData);
      })
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
          <H1>Sign Up for Lumen</H1>
          <div className="input-field">
            <label htmlFor="name">Male Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="name">Female Name</label>
            <input type="text" id="secondName" onChange={this.handleChange} />
          </div>
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
              Sign up
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

export default SignUp;
