import { createAppContainer, createStackNavigator } from 'react-navigation'; 

import Products from './components/screens/Products'
import Home from './components/screens/Home'
import Homepage from './components/screens/Homepage'
import testFlex from './components/screens/testFlex'


const AppNavigator = createStackNavigator({
 
  Home: {
    screen: Home,
  },
  Products: {
    screen: Products,
  },
  Homepage: {
    screen: Homepage,
  },
  testFlex: {
    screen: testFlex,
  },
  
}, {
    headerMode: 'none',
    initialRouteName: 'Homepage',
});

export default createAppContainer(AppNavigator);
