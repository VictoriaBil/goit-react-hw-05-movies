import { getMovieTrending } from 'API/FetchApi';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MovieList/MovieList';
import { Loader } from '../../Loader/Loader';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        setOnLoad(true);
        const data = await getMovieTrending();
        setTrendingMovie([...data]);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchHomepage();
  }, []);

  return (
    <div>
      {onLoad && <Loader />}
      {trendingMovie && <MoviesList movies={trendingMovie} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </div>
  );
};

export default Home;
