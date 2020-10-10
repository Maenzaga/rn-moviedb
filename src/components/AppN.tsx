import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../utils/navigation';
import { SafeAreaView } from 'react-native';

export const AppN = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};
