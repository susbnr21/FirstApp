//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
  import Home from './src/pages/Home';
  import Profile from './src/pages/Profile';
  import Registration from './src/pages/Registration';
  import Dashboard from './src/pages/Dashboard';
  import Vehicle from './src/pages/Vehicle';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile},
    Registration: { screen : Registration },
    Dashboard: {screen: Dashboard},
    Vehicle: {screen: Vehicle},
  });

  export default createAppContainer(AppNavigator);