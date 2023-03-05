import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../API/FetchApi';
import { CastList } from '../../components/CastList/CastList';
import { Loader } from '../../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState();
  const [error, setError] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setOnLoad(true);
        const data = await getMovieCredits(movieId);
        setMovieCast(data);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {onLoad && <Loader />}
      {movieCast && <CastList cast={movieCast} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </>
  );
};

export default Cast;
