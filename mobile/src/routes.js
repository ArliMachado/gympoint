import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: createBottomTabNavigator({
          Checkins,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
