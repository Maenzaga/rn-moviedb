import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
});

export const getCall = () =>
  instance.get('movie/popular', {
    params: {
      api_key: '93aea0c77bc168d8bbce3918cefefa45',
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
