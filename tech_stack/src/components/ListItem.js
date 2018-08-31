import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <CardSection>
        <Text>{this.props.library.item.title}</Text>
      </CardSection>
    )
  }
}

export default ListItem
