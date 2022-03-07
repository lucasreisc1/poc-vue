import gql from 'graphql-tag';

export const GET_ALL_MOVIES_QUERY = gql`
  query getAllMovies {
    getAllMovies {
      id
      name
      year
      imdbRating
      genre
      duration
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
    query getMovieById($id: ID!) {
      id
      name
      year
      imdbRating
      genre
      duration
    }
`;
