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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: JSON.parse(localStorage.getItem('authUser'))
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (!user && this.state.auth) {
        this.setState({ auth: undefined });
        localStorage.setItem('authUser', undefined)
        console.log("user signed out");
      } else {
        this.setState({ authUser: user })
        localStorage.setItem('authUser', JSON.stringify(user))
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={(props) => <Navbar {...props} authUser={this.state.authUser} />}/>
          <Route exact path="/" render={() => <Dashboard authUser={this.state.authUser} />}/>
          <Route exact path="/community" render={() => <Community authUser={this.state.authUser} />} />
          <Route exact path="/myusage" render={() => <MyUsage authUser={this.state.authUser} />} />
          <Route exact path="/realtime" render={() => <RealTime authUser={this.state.authUser} />} />
          <Route exact path="/products" render={() => <Products authUser={this.state.authUser} />} />
          <Route exact path="/signin" render={() => (<SignIn authUser={this.state.authUser}/>)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
