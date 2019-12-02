import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';
import HelpDesk from '~/pages/HelpDesk';

const AppStack = createBottomTabNavigator(
  {
    Checkins,
    HelpDesk,
  },
  {
    tabBarOptions: {
      activeTintColor: '#ee4e62',
      style: {
        marginBottom: 10,
      },
    },
  },
);

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
