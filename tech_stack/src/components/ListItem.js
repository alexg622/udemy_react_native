import React, { Component } from 'react'
import { Text, LayoutAnimation, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {
  constructor(props){
    super(props)
  }

  componentWillUpdate(){
    LayoutAnimation.spring()
  }

  renderDescription(){
    const { library, expanded } = this.props
    if(expanded){
      return (
        <CardSection>
          <Text style={{flex: 1}}>
            {library.item.description}
          </Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
