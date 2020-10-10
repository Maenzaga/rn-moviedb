import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../utils/navigation';

export const AppN = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
