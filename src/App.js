import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

//import the RoomList
import RoomList from './components/RoomList';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClwT6jEfKYrQG1CCpShuAutzpcHeh2CUE",
    authDomain: "messengerfirebase-b4b00.firebaseapp.com",
    databaseURL: "https://messengerfirebase-b4b00.firebaseio.com",
    projectId: "messengerfirebase-b4b00",
    storageBucket: "messengerfirebase-b4b00.appspot.com",
    messagingSenderId: "866062005361"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-4">
        <h4>Bloc Chat</h4>
        <div className="App">
          <RoomList fb={firebase}></RoomList>
        </div>
      </div>
      <div className="col-8">
       
      </div>
    </div>
    );
  }
}

export default App;
