import { getMovieTrending } from 'API/FetchApi';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MovieList/MovieList';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
    getMovieTrending().then(response => {
      setTrendingMovie([...response]);
      setOnLoad(false);
    });
  }, []);

  return <div>{trendingMovie && <MoviesList movies={trendingMovie} />}</div>;
};

export default Home;
