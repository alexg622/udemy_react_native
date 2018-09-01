import React, { Component } from 'react'
import { Picker } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from './actions'

class EmployeeCreate extends Component {
  render(){
    return(
    <Card>
      <CardSection>
        <Input
          onChangeText={value => this.props.employeeUdate({prop: "name", value})}
          label="Name"
          placholder="Jane"
          value={this.props.name}
        />
      </CardSection>

      <CardSection>
        <Input
          onChangeText={value => this.props.employeeUdate({prop: "phone", value})}
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
        />
      </CardSection>

      <CardSection>
      </CardSection>

      <CardSection>
        <Button>
          Create
        </Button>
      </CardSection>
    </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, form, shift }
}

export default connect(mapStateToProps, employeeUpdate)(EmployeeCreate)
