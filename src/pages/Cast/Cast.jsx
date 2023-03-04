import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../API/FetchApi';
import { CastList } from '../../components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await getMovieCredits(movieId);
      setMovieCast(data);
    };
    fetchMovieCast();
  }, [movieId]);

  return <>{movieCast && <CastList cast={movieCast} />}</>;
};

export default Cast;
