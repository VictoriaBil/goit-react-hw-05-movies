import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <h1>{title}</h1>
            </Link>
          </li>
        );
      })}
    </div>
  );
};
