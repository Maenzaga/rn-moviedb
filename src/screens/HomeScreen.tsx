import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';

interface NavigationButtonProps {
  text: string;
  screenName: string;
}

export const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToList = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const NavigationButton = (props: NavigationButtonProps) => {
    const { text, screenName } = props;
    return (
      <View style={{ alignSelf: 'center' }}>
        <Button
          title={text}
          onPress={() => {
            navigateToList(screenName);
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ padding: 4 }}>
      <Text>MOVIE DB</Text>
      <NavigationButton text="Movie List" screenName="List" />
    </View>
  );
};
