import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ListRenderItemInfo } from 'react-native';
import { AxiosResponse } from 'axios';
import { ListItemView } from '../components/ListView/ListItemView';
import {
  getCall,
  MovieListingResponse,
  MovieResponse,
} from '../api/MovieSearchService';
import { Movie } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

interface ListScreenProps {
  navigation: ProfileScreenNavigationProp;
}
type ProfileScreenNavigationProp = StackNavigationProp<any, 'ListScreen'>;

export const ListScreen = (props: ListScreenProps) => {
  const renderItem = (info: ListRenderItemInfo<Movie>) => {
    return <ListItemView navigation={props.navigation} movie={info.item} />;
  };

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
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
        setPopularMovies(realmovies);
      })
      .catch((err: any) => {
        console.error('Something went wrong', err);
      });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={popularMovies}
        renderItem={renderItem}
        keyExtractor={(_, index: number) => index.toString()}
      />
    </SafeAreaView>
  );
};