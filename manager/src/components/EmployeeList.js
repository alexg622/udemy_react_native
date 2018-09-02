import React, { Component } from 'react'
import { ListView, Modal } from 'react-native'
import { employeesFetch } from '../actions'
import { connect } from 'react-redux'
import ListItem from './ListItem'
import _ from 'lodash'

class EmployeeList extends Component {

  componentWillMount(){
    this.props.employeesFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.employees)
  }

  renderRow(){
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.emloyees, (val, uid) => {
    return { ...val, uid}
  })
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
