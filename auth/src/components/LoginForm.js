import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, Spinner, Input, CardSection } from './common'

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    }
  }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: "" , loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess(){
    this.setState({
      error: "",
      loading: false,
      email: "",
      password: ""
    })
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: 'red'
  }
}

export default LoginForm
