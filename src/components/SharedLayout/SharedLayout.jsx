import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';
import { Loader } from '../../Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Link to={PageNames.homepage}>Home</Link>
        <Link to={PageNames.movies}>Movies</Link>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
