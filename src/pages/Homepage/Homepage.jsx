import { getMovieTrending } from 'API/FetchApi';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MovieList/MovieList';
import { Loader } from '../../Loader/Loader';

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

  return (
    <div>
      {onLoad && <Loader />}
      {trendingMovie && <MoviesList movies={trendingMovie} />}
    </div>
  );
};

export default Home;
