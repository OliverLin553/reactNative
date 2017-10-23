import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar
} from "react-native"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentIndex: 0
    }
  }

  componentWillMount() {
    fetch('http://localhost:8882/rest/mash')
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  }

  render() {
    let contents;
    if (!this.state.list.length) {
      contents = (
        <View style={ styles.loading }>
          <Text style={ styles.loadingText }>Loading</Text>
          <ActivityIndicator />
        </View>
      )
    } else {
      contents = (
        <View style={ styles.content }>
          <Text>Loaded</Text>
        </View>
      )
    }

  return (
    <View style={ styles.container }>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <View style={ styles.header }>
        <Text style={ styles.headerText }>
          首页
        </Text>
      </View>
      {contents}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 14,
    marginBottom: 20
  },
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
