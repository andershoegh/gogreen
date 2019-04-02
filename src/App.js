import React, { Component } from "react";
import { firebase } from "../src/Utils/Firebase";
import { Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import MyUsage from './Pages/myUsage';
import RealTime from './Pages/RealTime';
import Products from './Pages/Product';
import Navbar from './Components/NavBar/Navbar'


class App extends Component {
  state = {
   // dbCollection: []s
  };

  /*componentDidMount() {
    const mappedDBCollection = [];
    firebase.getData().then(r => {
      r.forEach(doc => mappedDBCollection.push(doc.data()));
      this.setState({ dbCollection: mappedDBCollection });
    });
  }*/

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/community' component={Community}></Route>
          <Route exact path='/myusage' component={MyUsage}></Route>
          <Route exact path='/realtime' component={RealTime}></Route>
          <Route exact path='/products' component={Products}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
