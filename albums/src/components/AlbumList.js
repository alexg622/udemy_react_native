import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'
import axios from 'axios'

class AlbumList extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums: []
    }
  }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
  }

  render() {
    let items = this.state.albums.map((album, i) => <AlbumDetail key={i} album={album}/>)
    return (
      <ScrollView>
        {items}
      </ScrollView>
    )
  }
}

export default AlbumList
