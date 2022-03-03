import { MOVIE_MUTATIONS } from '@/store/movie/movieMutations';

export const MOVIE_ACTIONS = {
  FIND_ALL_MOVIES: 'FIND_ALL_MOVIES',
};

// TODO replace mock to mock server
const movies = [
  {
    id: 1,
    name: 'Interestelar',
    year: 2014,
    imdbRating: 8.7,
    genre: 'Sci-Fi',
    duration: '2h 49m',
  },
  {
    id: 2,
    name: 'Dune',
    year: 2021,
    imdbRating: 8.1,
    genre: 'Adventure',
    duration: '2h 35m',
  },
  {
    id: 3,
    name: 'Fight Club',
    year: 1999,
    imdbRating: 8.8,
    genre: 'Drama',
    duration: '2h 19m',
  },
  {
    id: 4,
    name: 'Forrest Gump',
    year: 1994,
    imdbRating: 8.8,
    genre: 'Drama',
    duration: '2h 22m',
  },
  {
    id: 5,
    name: 'The Curious Case of Benjamin Button',
    year: 2008,
    imdbRating: 7.8,
    genre: 'Drama',
    duration: '2h 46m',
  },
  {
    id: 6,
    name: 'Gone Girl',
    year: 2014,
    imdbRating: 8.1,
    genre: 'Drama',
    duration: '2h 29m',
  },
];

export default {

  [MOVIE_ACTIONS.FIND_ALL_MOVIES](context) {
    context.commit(MOVIE_MUTATIONS.UPDATE_MOVIES, movies);

    return movies;
  },

};
