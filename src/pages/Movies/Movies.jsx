import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MovieList/MovieList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { getMovieSearch } from '../../API/FetchApi';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      if (!searchValue) return;
      try {
        setOnLoad(true);
        const data = await getMovieSearch(searchValue);
        setMovies(data);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchMovie();
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {onLoad && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </main>
  );
};
export default Movies;
