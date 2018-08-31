import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAIGSl7YlD07m6-6bKesefXjI7QZzWRIQs",
      authDomain: "authentication-8e6d3.firebaseapp.com",
      databaseURL: "https://authentication-8e6d3.firebaseio.com",
      projectId: "authentication-8e6d3",
      storageBucket: "authentication-8e6d3.appspot.com",
      messagingSenderId: "974795647169"
    })
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
