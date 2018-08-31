import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries}
}

export default connect(mapStateToProps)(LibraryList)
