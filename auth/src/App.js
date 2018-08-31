import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'
import { keys } from '../keys/keys'

class App extends Component {
  state = { loggedIn: null }

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

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (

            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>

        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large"/>
    }
  }

 render() {
   return (
     <View style={{height: 100}}>
       <Header headerText="Authentication" />
       {this.renderContent()}
     </View>
   );
  }
}

const styles = {
  logout: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
}

export default App;
