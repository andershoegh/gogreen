import React, { Component } from "react";
import { firebase } from "../src/Utils/Firebase";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Community from "./Pages/Community";
import MyUsage from "./Pages/myUsage";
import RealTime from "./Pages/RealTime";
import Products from "./Pages/Product";
import SignIn from "./Pages/SignIn";
import Navbar from "./Components/NavBar/Navbar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
      user: null,
      community: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
    //   axios.get('http://localhost:4000/users/Auth_UID').then(res => {
    //   this.setState({data: res.data});
    // });

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
        <div>
          <Route
            path="/"
            render={props => (
              <Navbar {...props} authUser={this.state.authUser} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => <Dashboard authUser={this.state.authUser} />}
          />
          <Route
            exact
            path="/community"
            render={() => (
              <Community
                community={this.state.community}
                authUser={this.state.authUser}
              />
            )}
          />
          <Route
            exact
            path="/myusage"
            render={() => (
              <MyUsage user={this.state.user} authUser={this.state.authUser} />
            )}
          />
          <Route
            exact
            path="/realtime"
            render={() => <RealTime authUser={this.state.authUser} />}
          />
          <Route
            exact
            path="/products"
            render={() => (
              <Products user={this.state.user} authUser={this.state.authUser} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={() => <SignIn authUser={this.state.authUser} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
