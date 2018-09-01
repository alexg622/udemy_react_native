import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB2JR22iIjVoFluSweqDbKpsG_O6M5NRUo",
      authDomain: "manager-abed4.firebaseapp.com",
      databaseURL: "https://manager-abed4.firebaseio.com",
      projectId: "manager-abed4",
      storageBucket: "",
      messagingSenderId: "846105105365"
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm /> 
      </Provider>
    )
  }
}

export default App
