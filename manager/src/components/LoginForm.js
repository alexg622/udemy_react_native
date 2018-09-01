import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {

  onEmailChanged(text) {
    this.props.emailChanged(text)
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text)
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

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { email, password } = state
  return {
    email: email,
    password: password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)
