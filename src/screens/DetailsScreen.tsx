import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Movie } from 'app/types';

type ProfileScreenRouteProp = RouteProp<
  { Details: { movieName: string } },
  'Details'
>;

type Props = {
  route: ProfileScreenRouteProp;
};

export const DetailsScreen = (route: Props) => {
  const { movieName } = route.route.params;
  return <Text>Title: {JSON.stringify(movieName)}</Text>;
};
