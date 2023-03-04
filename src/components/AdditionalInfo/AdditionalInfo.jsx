import { Link, useLocation, Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';
import {} from '../AdditionalInfo/AdditionalInfo.styled';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link
            to={PageNames.cast}
            state={{ from: location.state?.from ?? '/' }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={PageNames.reviews}
            state={{ from: location.state?.from ?? '/' }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
