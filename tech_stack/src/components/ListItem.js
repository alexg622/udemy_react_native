import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {
  constructor(props){
    super(props)
  }

  renderDescription(){
    const {library, selectedLibraryId} = this.props
    if(library.item.id === this.props.selectedLibraryId){
      return (
        <Text>{library.item.description}</Text>
      )
    }
  }

  render(){
    const { id, title } = this.props.library.item
    const { titleStyle } = styles

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={ titleStyle }>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  return {
    selectedLibraryId: state.selectedLibraryId
  }
}

export default connect(mapStateToProps, actions)(ListItem)
