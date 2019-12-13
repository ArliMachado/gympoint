import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import SignIn from '~/pages/SignIn';
import Checkin from '~/pages/Checkin';

import NewHelp from '~/pages/HelpOrder/New';
import HelpOrder from '~/pages/HelpOrder';
import HelpAnswered from '~/pages/HelpOrder/HelpAnswered';

const Help = {
  screen: createStackNavigator(
    {
      HelpOrder,
      NewHelp,
      HelpAnswered,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerLeftContainerStyle: {
          marginLeft: 5,
          color: '#000',
        },
      },
    },
  ),

  navigationOptions: {
    tabBarLabel: 'Pedir ajuda',
    tabBarIcon: ({tintColor}) => (
      <Icon name="live-help" size={20} color={tintColor} />
    ),
  },
};

const Checkins = {
  screen: createStackNavigator(
    {
      Checkin,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: <Header />,
      },
    },
  ),

  navigationOptions: {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({tintColor}) => (
      <Icon name="live-help" size={20} color={tintColor} />
    ),
  },
};

const AppStack = createBottomTabNavigator(
  {
    Checkins,
    Help,
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
        App: AppStack,
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
