import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ListRenderItemInfo } from 'react-native';
import { ListItemView } from './src/components/ListView/ListItemView';
import {
  getCall,
  MovieListingResponse,
  MovieResponse,
} from './MovieSearchService';
import { AxiosResponse } from 'axios';
import { Movie } from './types';

const App = () => {
  const renderItem = (info: ListRenderItemInfo<Movie>) => {
    return <ListItemView movie={info.item} />;
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
        keyExtractor={(item: Movie, index: number) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
