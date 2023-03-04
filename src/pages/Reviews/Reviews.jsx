import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../API/FetchApi';
import { ReviewsList } from '../../components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const data = await getMovieReviews(movieId);
      setMovieReviews(data);
    };
    fetchMovieReviews();
  }, [movieId]);

  return <>{movieReviews && <ReviewsList reviews={movieReviews} />}</>;
};
export default Reviews;
