import gql from 'graphql-tag';

export default {

  GET_ALL_MOVIES_QUERY: gql`
    query movies {
      movies {
        id
        name
        year
        genre
        duration
      }
    }
  `,

};
