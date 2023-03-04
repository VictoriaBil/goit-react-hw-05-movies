import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { PageNames } from '../router/paths';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

const Home = lazy(() => import('../pages/Homepage/Homepage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

function App() {
  return (
    <Routes>
      <Route path={PageNames.homepage} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={PageNames.movies} element={<Movies />} />
        <Route path={PageNames.moviesDetails} element={<MovieDetails />}>
          <Route path={PageNames.cast} element={<Cast />} />
          <Route path={PageNames.reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
