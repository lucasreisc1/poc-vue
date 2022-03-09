import MovieBuilder from '@/util/movie/MovieBuilder';
import MovieTestHelper from '../../test-helper/movie/MovieTestHelper';

describe('MovieBuilder', () => {
  describe('setImdbRating', () => {
    it('with number type parameter', () => {
      // setup:
      const movie = MovieTestHelper.movie();
      const imdbRating = 10;
      // execute:
      const newMovie = new MovieBuilder(movie).setImdbRating(imdbRating).build();
      // verify:
      expect(newMovie.imdbRating).toBe(imdbRating);
    });

    it('with string type parameter', () => {
      // setup:
      const movie = MovieTestHelper.movie();
      const imdbRating = '10.0';
      // execute:
      const newMovie = new MovieBuilder(movie).setImdbRating(imdbRating).build();
      // verify:
      expect(newMovie.imdbRating).toBe(+imdbRating);
    });
  });

  describe('setYear', () => {
    it('with number type parameter', () => {
      // setup:
      const movie = MovieTestHelper.movie();
      const year = 2000;
      // execute:
      const newMovie = new MovieBuilder(movie).setYear(year).build();
      // verify:
      expect(newMovie.year).toBe(year);
    });

    it('with string type parameter', () => {
      // setup:
      const movie = MovieTestHelper.movie();
      const year = '1996';
      // execute:
      const newMovie = new MovieBuilder(movie).setYear(year).build();
      // verify:
      expect(newMovie.year).toBe(+year);
    });
  });
});
