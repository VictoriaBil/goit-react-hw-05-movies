import { Link, useLocation, Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <div>
      <title>Additional information</title>
      <ul>
        <li>
          <Link
            to={PageNames.cast}
            state={{ from: location.state?.from } ?? '/'}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={PageNames.reviews}
            state={{ from: location.state?.from } ?? '/'}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
