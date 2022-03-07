import gql from 'graphql-tag';

export const CREATE_MOVIE = gql`
    mutation createMovie($movie: MovieInput!) {
      createMovie(movie: $movie)
    }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user)
  }
`;
