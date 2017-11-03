import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from "react-native"
import Home from "../../components/home"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "home"
    }
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="首页"
          icon={ require("../../images/home.png") }
          onPress={ () => this.changeTab("home") }
          selected={ this.state.selectedTab === 'home' }>
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="分类"
          icon={ require("../../images/classification.png") }
          onPress={ () => this.changeTab("classification") }
          selected={ this.state.selectedTab === "classification" }>
          <View style={ styles.pageView }>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我的"
          icon={ require("../../images/my.png") }
          onPress={ () => this.changeTab("my") }
          selected={ this.state.selectedTab === "my" }>
          <View style={ styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
})
