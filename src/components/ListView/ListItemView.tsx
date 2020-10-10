import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Movie } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

interface ListViewProps {
  movie: Movie;
  navigation: ProfileScreenNavigationProp;
}
type ProfileScreenNavigationProp = StackNavigationProp<any, 'ListScreen'>;

export const ListItemView = (props: ListViewProps) => {
  const onPress = () => {
    props.navigation.navigate('Details', { movieName: `${props.movie.title}` });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 8, flexDirection: 'row' }}>
        <View>
          <Image
            source={{ uri: props.movie.image }}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View>
          <Text>{props.movie.title}</Text>
          <Text>{props.movie.popularity}</Text>
          <Text>{props.movie.voteAverage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
