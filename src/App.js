import React, { Component } from "react";
import { firebase } from "../src/Utils/Firebase";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Community from "./Pages/Community";
import MyUsage from "./Pages/myUsage";
import RealTime from "./Pages/RealTime";
import Products from "./Pages/Product";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import My404Page from "./Pages/My404Page";
import Navbar from "./Components/NavBar/Navbar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
      user: null,
      community: null,
      isGreen: JSON.parse(localStorage.getItem("isGreen"))
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      axios.get("https://go-greener.herokuapp.com/isEnergyGreen").then(res => {
        if (JSON.parse(localStorage.getItem("isGreen")) !== res.data) {
          this.setState({ isGreen: res.data });
          localStorage.setItem("isGreen", res.data);
        }
      });

      this.setState({ authUser: user, user });
      localStorage.setItem("authUser", JSON.stringify(user));
      this.getUser();
      if (!user) {
        this.setState({ community: null });
      } else {
        this.getCommunity();
      }
    });
    this.getUser();
    this.getCommunity();
  }

  getUser = () => {
    let user;
    if (this.state.authUser) {
      firebase.getUsers().then(r => {
        r.forEach(doc => {
          if (doc.id === this.state.authUser.uid) {
            user = { id: doc.id, data: doc.data() };
          }
        });
        this.setState({ user: user });
      });
    }
  };

  getCommunity = () => {
    let newCommunity = [];
    if (this.state.authUser) {
      firebase.getUsers().then(r => {
        r.forEach(doc => {
          newCommunity.push({ id: doc.id, data: doc.data() });
        });
        this.setState({ community: newCommunity });
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Route
            path="/"
            render={props => (
              <Navbar {...props} authUser={this.state.authUser} />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Dashboard
                  user={this.state.user}
                  community={this.state.community}
                  isGreen={this.state.isGreen}
                  authUser={this.state.authUser}
                />
              )}
            />
            <Route
              exact
              path="/community"
              render={() => (
                <Community
                  community={this.state.community}
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            />
            <Route
              exact
              path="/myusage"
              render={() => (
                <MyUsage
                  user={this.state.user}
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            />
            <Route
              exact
              path="/realtime"
              render={() => (
                <RealTime
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            />
            <Route
              exact
              path="/products"
              render={() => (
                <Products
                  user={this.state.user}
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            />
            <Route
              exact
              path="/signin"
              render={() => (
                <SignIn
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            />
            {/* <Route
              exact
              path="/signup"
              render={() => (
                <SignUp
                  authUser={this.state.authUser}
                  isGreen={this.state.isGreen}
                />
              )}
            /> */}
            <Route render={() => <My404Page isGreen={this.state.isGreen} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
