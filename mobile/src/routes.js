import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';
import HelpDesk from '~/pages/HelpDesk';

const AppStack = createBottomTabNavigator({
  Checkins,
  HelpDesk,
});

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: createStackNavigator(
          {
            AppStack,
          },
          {
            headerMode: 'none',
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
