import { Link, Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Link to={PageNames.homepage}>Home</Link>
        <Link to={PageNames.movies}>Movies</Link>
      </header>
      <Outlet />
    </div>
  );
};
