import movieQueries from '@/api/movie/movieQueries';
import { MOVIE_MUTATIONS } from '@/store/movie/movieMutations';
import { apolloClient } from '@/infra/graphql/apollo-client';

export const MOVIE_ACTIONS = {
  FIND_ALL_MOVIES: 'FIND_ALL_MOVIES',
};

export default {

  async [MOVIE_ACTIONS.FIND_ALL_MOVIES](context) {
    const { data } = await apolloClient.query({ query: movieQueries.GET_ALL_MOVIES_QUERY });

    context.commit(MOVIE_MUTATIONS.UPDATE_MOVIES, data.movies);

    return data;
  },

};
