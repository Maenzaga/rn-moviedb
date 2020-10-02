import React from 'react';
import { View, Image, Text } from 'react-native';
import { Movie } from '../../types';

interface ListViewProps {
  movie: Movie;
}

export const ListItemView = (props: ListViewProps) => {
  return (
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
  );
};
