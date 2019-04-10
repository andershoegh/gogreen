import React, { Component } from "react";
import { firebase } from "../src/Utils/Firebase";
import { Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import MyUsage from './Pages/myUsage';
import RealTime from './Pages/RealTime';
import Products from './Pages/Product';
import SignIn from './Pages/SignIn';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
   firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }


  updateAuth = authUser => {
    //console.log("User logged in");
    this.setState({authUser: authUser});
   // console.log(this.state.authUser);
  }



  componentDidUpdate() {
      /*if(!user && this.state.auth) {
        this.setState({auth: undefined})
        console.log("user signed out");
      }*/
      console.log(this.state.authUser);
    }

  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path='/' render={() => <Dashboard authUser={this.state.authUser} />} />
            <Route exact path='/community' render={() => <Community authUser={this.state.authUser}/>}/>
            <Route exact path='/myusage' render={() => <MyUsage authUser={this.state.authUser}/>}/>
            <Route exact path='/realtime' render={() => <RealTime authUser={this.state.authUser}/>}/>
            <Route exact path='/products' render={() => <Products authUser={this.state.authUser}/>}/>
            <Route exact path='/signin' render={() => <SignIn updateAuth={this.updateAuth} authUser={this.state.authUser}/>} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
