import { NavLink } from 'react-router-dom';
import { PageNames } from '../../router/paths';

export const ErrorPage = () => {
  return (
    (<div> 404 page not found</div>),
    (<NavLink to={PageNames.homepage}>Go to Homepage</NavLink>)
  );
};
