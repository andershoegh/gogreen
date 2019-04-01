import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebase } from "../src/Utils/Firebase";

class App extends Component {
  state = {
   // dbCollection: []
  };

  /*componentDidMount() {
    const mappedDBCollection = [];
    firebase.getData().then(r => {
      r.forEach(doc => mappedDBCollection.push(doc.data()));
      this.setState({ dbCollection: mappedDBCollection });
    });
  }*/

  render() {
    //console.log(this.state.dbCollection);
    return (
      <div>
      
      </div>
    );
  }
}

export default App;
