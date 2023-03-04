import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Homepage/Homepage';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

import { CastList } from '../components/CastList/CastList';
import { ReviewsList } from '../components/ReviewsList/ReviewsList';
import { PageNames } from '../router/paths';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path={PageNames.homepage} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={PageNames.movies} element={<Movies />} />
        <Route path={PageNames.moviesDetails} element={<MovieDetails />}>
          <Route path={PageNames.cast} element={<CastList />} />
          <Route path={PageNames.reviews} element={<ReviewsList />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
