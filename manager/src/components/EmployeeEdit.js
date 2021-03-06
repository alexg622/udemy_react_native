import React, { Component } from 'react'
import _ from 'lodash'
import communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { Card, CardSection, Button } from './common'
import Confirm from './Confirm'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }

  onButtonPress(){
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress(){
    const { phone, shift } = this.props
    communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onAccept(){
    const { uid } = this.props.employee

    this.props.employeeDelete({ uid })
  }

  onDecline(){
    this.setState({showModal: false})
  }

  render(){
    <Card>
      <EmployeeFrom />
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Save Changes
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={this.onTextPress.bind(this)}>
          Text Schedule
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
          Fire Employee
        </Button>
      </CardSection>
      <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
      >
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeDelete, employeeSave, employeeUpdate })(EmployeeEdit)
