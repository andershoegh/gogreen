import React, { Component } from "react";
import { firebase } from "../src/Utils/Firebase";
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import MyUsage from './Pages/myUsage';
import RealTime from './Pages/RealTime';
import Products from './Pages/Product';
import Navbar from './Components/NavBar/Navbar';
import SignIn from './Pages/SignIn';


class App extends Component {
  state = {
   // dbCollection: []
   auth: firebase.trackAuthStatus(user => {
     return user;
   })
  };

  componentDidMount() {
   /* firebase.trackAuthStatus(user => {
        this.setState({auth: user})
    }
    )*/
    /*firebase.trackAuthStatus.then(() =>{
      this.setState({
        auth: true
      });
      console.log(this.state.auth);
    });*/

    /*
    const mappedDBCollection = [];
    firebase.getData().then(r => {
      r.forEach(doc => mappedDBCollection.push(doc.data()));
      this.setState({ dbCollection: mappedDBCollection });
    });*/

    console.log('cello');
  }

  updateAuth = auth => {
    console.log(auth);
    this.setState({auth: auth});
  }

  componentDidUpdate(snapShot) {

    console.log(snapShot);
    firebase.trackAuthStatus(user => {
      console.log(user + 'pdycho');
      this.setState({auth: user})
      /*if(!user && this.state.auth) {
        this.setState({auth: undefined})
        console.log("user signed out");
      }*/
    }
    )
  }

  render() {
    return (
      <BrowserRouter>
          <div>
            <Route path='/' component={Navbar}/>
            <Route exact path='/' render={() => <Dashboard auth={this.state.auth} />} />
            <Route exact path='/community' component={Community}/>
            <Route exact path='/myusage' component={MyUsage}/>
            <Route exact path='/realtime' component={RealTime}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/signin' render={() => <SignIn updateAuth={this.updateAuth} auth={this.state.auth}/>} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
