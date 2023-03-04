import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';
import { Loader } from '../../Loader/Loader';
import { Container, Header, Link } from '../SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to={PageNames.homepage}>Home</Link>
        <Link to={PageNames.movies}>Movies</Link>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
