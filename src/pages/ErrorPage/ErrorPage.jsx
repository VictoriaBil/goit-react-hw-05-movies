import PageError from '../../image/404-error.jpg.webp';
import { PageNames } from '../../router/paths';
import { Link } from '../ErrorPage/ErrorPage.styled';

export const ErrorPage = () => {
  return (
    (<div> PageError </div>),
    (<Link to={PageNames.homepage}>Go to Homepage</Link>)
  );
};
