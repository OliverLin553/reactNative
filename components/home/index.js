import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from "react-native"

import ScrollContent from '../scroll_content'
import SwiperHome from './swiper'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollHeight: 0
    }
  }
  componentWillMount() {
    const { height } = Dimensions.get('window')
    this.setState({
      scrollHeight: height - 66 - 44
    })
  }

  render() {
    return (
      <View>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            首页
          </Text>
        </View>
        <ScrollContent height = {this.state.scrollHeight}>
          <SwiperHome />
        </ScrollContent>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#760004',
    paddingTop: 20,
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
