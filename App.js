import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import SafeAreaFix from './SafeAreaFix';
import {  AuthProvider } from './AuthContext';
import { RootNavigator } from './navigation';


export default function App() {
  return (
    <AuthProvider>
        <SafeAreaFix>
          <NavigationContainer theme={DarkTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaFix>
    </AuthProvider>
  );
}
