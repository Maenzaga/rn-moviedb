import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  View,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import { ListItemView } from '../components/ListView/ListItemView';
import {
  getCall,
  MovieListingResponse,
  MovieResponse,
} from '../api/MovieSearchService';
import { Movie } from '../types';

interface ListScreenProps {
  navigation: ListScreenNavigationProps;
}

export type ListScreenNavigationProps = NavigationProp<
  { Details: { movieName: string } },
  'Details'
>;

export const ListScreen = (props: ListScreenProps) => {
  const renderItem = (info: ListRenderItemInfo<Movie>) => {
    return <ListItemView navigation={props.navigation} movie={info.item} />;
  };

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const makeCall = () => {
    setIsLoading(true);
    getCall()
      .then((data: AxiosResponse<MovieListingResponse>) => {
        const realmovies: Movie[] = data.data.results.map(
          (item: MovieResponse) => ({
            title: item.title,
            image: item.poster_path,
            popularity: item.popularity,
            voteAverage: item.vote_average,
          }),
        );

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setPopularMovies(realmovies);
      })
      .catch((err: any) => {
        console.error('Something went wrong', err);
        setIsLoading(false);
        setShowError(true);
      });
  };

  useEffect(() => {
    makeCall();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      ) : !showError ? (
        <FlatList
          data={popularMovies}
          renderItem={renderItem}
          keyExtractor={(_, index: number) => index.toString()}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <Text>Ha ocurrido un error!!!!</Text>
          <Button title="Retry" onPress={makeCall} />
        </View>
      )}
    </SafeAreaView>
  );
};
