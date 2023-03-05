import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, List, Title } from '../MovieList/MovieList.styled';
import noPoster from '../../image/noposter.webp';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ poster_path, title, id }) => {
        return (
          <List key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noPoster
                }
                alt={title}
              />
              <Title>{title}</Title>
            </Link>
          </List>
        );
      })}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
