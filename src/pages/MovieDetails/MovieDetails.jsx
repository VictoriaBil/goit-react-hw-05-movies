import { AdditionalInfo } from '../../components/AdditionalInfo/AdditionalInfo';
import { Link } from 'react-router-dom';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../API/FetchApi';
import { Loader } from '../../Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <MovieInfo movieInfo={movieDetails} />
          <AdditionalInfo backPath={location.state?.from ?? '/'} />
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
