import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';


const navigator = createStackNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
    Third: ThirdScreen,
    Fourth: FourthScreen,
    Fifth: FifthScreen,
  },
  {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      title: 'Task-5',
    },
  }
);


export default createAppContainer(navigator);