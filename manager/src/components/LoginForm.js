import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

  onEmailChanged(text) {
    this.props.emailChanged(text)
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props
    this.props.loginUser({ email, password})
  }

  renderError(){
    console.log(this.props.error);
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  render() {

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  const { email, password, error } = state.auth
  return {
    email: email,
    password: password,
    error: error
  }
}

export default connect(mapStateToProps, { emailChanged, loginUser, passwordChanged })(LoginForm)
