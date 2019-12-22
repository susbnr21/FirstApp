//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
  import Home from './src/pages/Home';
  import Profile from './src/pages/Profile';
  import Registration from './src/pages/Registration'

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile},
    Registration: { screen : Registration },
    headerMode: 'none'
  });

  export default createAppContainer(AppNavigator);