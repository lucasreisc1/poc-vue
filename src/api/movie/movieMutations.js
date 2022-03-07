import gql from 'graphql-tag';

export default {
  CREATE_USER_MUTATION() {
    return gql`
      mutation createUser($user: UserInput!) {
        createUser(user: $user)
      }
    `;
  },

  CREATE_MOVIE() {
    return gql`
      mutation createMovie($movie: MovieInput!) {
        createMovie(movie: $movie)
      }
    `;
  },
};
