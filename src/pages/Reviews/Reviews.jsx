import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../API/FetchApi';
import { ReviewsList } from '../../components/ReviewsList/ReviewsList';
import { Loader } from '../../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [error, setError] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setOnLoad(true);
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {onLoad && <Loader />}
      {movieReviews && <ReviewsList reviews={movieReviews} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </>
  );
};
export default Reviews;
