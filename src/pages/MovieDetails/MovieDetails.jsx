import { AdditionalInfo } from '../../components/AdditionalInfo/AdditionalInfo';
import { Link } from 'react-router-dom';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../API/FetchApi';
// Loader

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movie_id);
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movie_id]);

  return (
    <div>
      {movieDetails && (
        <>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <MovieInfo movieInfo={movieDetails} />
          <AdditionalInfo />
        </>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
