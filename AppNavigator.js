import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
  import Home from './src/pages/Home';
  import Profile from './src/pages/Profile';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile},
    headerMode: 'none'
  });

  export default createAppContainer(AppNavigator);