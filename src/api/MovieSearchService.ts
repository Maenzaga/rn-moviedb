import axios from 'axios';
import { apiKey } from 'config';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
});

export const getCall = () =>
  instance.get('movie/popular', {
    params: {
      api_key: apiKey,
    },
  });

export type MovieResponse = {
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
};

export type MovieListingResponse = {
  results: MovieResponse[];
};
