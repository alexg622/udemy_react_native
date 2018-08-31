import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'
import { keys } from '../keys/keys'
// add something
class App extends Component {
  state = { loggedIn: false }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false})
      }
    });
  }

 render() {
   return (
     <View>
       <Header headerText="Authentication" />
       <LoginForm />
     </View>
   );
  }
}

export default App;
