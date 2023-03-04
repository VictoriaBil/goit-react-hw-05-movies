import { Link } from 'react-router-dom';
import { PageNames } from '../../router/paths';

export const ErrorPage = () => {
  return (
    (<div> 404 page not found</div>),
    (<Link to={PageNames.homepage}>Go to Homepage</Link>)
  );
};
