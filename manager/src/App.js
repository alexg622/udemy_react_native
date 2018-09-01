import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk'
import { keys } from '../keys/keys'

class App extends Component {
  componentWillMount() {
    console.log(keys.apiKey);
    const config = {
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    }
    firebase.initializeApp(config)
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
