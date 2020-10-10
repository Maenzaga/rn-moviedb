import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ListScreenNavigationProps } from 'app/screens/ListScreen';
import { Movie } from '../../types';

interface ListItemViewProps {
  movie: Movie;
  navigation: ListScreenNavigationProps;
}

export const ListItemView = (props: ListItemViewProps) => {
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
