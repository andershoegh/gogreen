import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../Utils/Firebase";
import "./SignUp.css";
import { Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import GreenBgImg from "../images/backgroundGreen.png";
import RedBgImg from "../images/backgroundRed.png";

class SignIn extends Component {
  state = {
    firstName: "",
    lastName: "",
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

    // const timeStamp = new firebase.firestore.Timestamp.fromDate(
    //   new Date(
    //     moment("1970-01-01 00:00:00", "YYYY-MM-DD HH:mm:SS").format(
    //       "YYYY-MM-DDTHH:mm:SS"
    //     )
    //   )
    // );
    const timeStamp = "";
    const productObj = {
      greenEnergy: 0,
      redEnergy: 0,
      totalEnergy: 0,
      start: timeStamp,
      end: timeStamp
    };

    const docData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      totalEnergy: 0,
      totalGreenEnergy: 0,
      products: {
        washingMachine: productObj,
        dryer: productObj,
        vacuum: productObj,
        entertainment: productObj,
        dishwasher: productObj
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
          <H1>Sign Up for GoForGreen</H1>
          <div className="input-field">
            <label htmlFor="name">Firstname</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="name">Lastname</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
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

export default SignIn;
