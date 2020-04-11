import * as React from 'react';

import Constants from 'expo-constants';
import { Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { useAuth } from '../AuthContext';
import { Home, LogIn } from '../screens';

import { SpotifyTransition } from './SpotifyTransition';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      headerMode="float"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
      }}>
      <AuthStack.Screen name="Login" component={LogIn} />
    </AuthStack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <AppStack.Navigator
      headerMode="float"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
      }}>
      <AppStack.Screen
        name="Albums"
        component={Home}
        options={{
          headerRight: () => <SignOutButton />,
        }}
      />
    </AppStack.Navigator>
  );
};

export const RootNavigator = () => {
  const { status } = useAuth();

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        ...SpotifyTransition,
      }}>
      {status === 'signOut' ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="App" component={HomeNavigator} />
      )}
    </RootStack.Navigator>
  );
};

const SignOutButton = () => {
  const { singOut } = useAuth();
  return (
    <Button mode="text" onPress={() => singOut()}>
      Log Out
    </Button>
  );
};
