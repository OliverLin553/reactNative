import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Tabs from './components/tabs'
import Home from './components/home'

const reactNative = StackNavigator({
  Tabs: { screen: Tabs },
  Home: { screen: Home }
  }, {
    headerMode: 'none',
    initialRouteName: 'Tabs'
  }
);


AppRegistry.registerComponent('reactNative', () => reactNative);
