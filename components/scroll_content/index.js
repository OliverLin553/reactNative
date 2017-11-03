import React, { Component } from 'react';
import {
  ScrollView,
  RefreshControl,
  Dimensions
} from 'react-native';
export default class ScrollContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollHeight: 0,
      isRefreshing: false
    }
  }

  componentDidMount() {
    const { width, height } = Dimensions.get('window')

    this.setState({
      scrollHeight: height - 66
    })
  }

  onRefresh() {
    this.setState({
      isRefreshing: true
    })

    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 2000)
  }

  render() {
    let height = 10
    if (this.props.height) {
      height = this.props.height
    } else {
      height = this.state.scrollHeight
    }
    return <ScrollView style={{height: height}}
                       refreshControl = {
                         <RefreshControl
                           refreshing={this.state.isRefreshing}
                           onRefresh={ () => this.onRefresh() }
                           tintColor="#999"
                           title="Loading..."
                           titleColor="#ccc"
                           colors={['#ff0000', '#00ff00', '#0000ff']}
                           progressBackgroundColor="#ffff00" />
                       }
    >
      {this.props.children}
    </ScrollView>
  }
}

  