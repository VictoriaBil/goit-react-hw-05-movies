import PropTypes from 'prop-types';
import {
  Container,
  Title,
  UserScore,
  InfoBlock,
  Overview,
  OverviewInfo,
  Genres,
  GenresInfo,
  ImgWrap,
} from '../MovieInfo/MovieInfo.styled';
import noPoster from '../../image/noposter.webp';

export const MovieInfo = ({
  movieInfo: { poster_path, title, vote_average, genres, overview },
}) => {
  return (
    <Container>
      <ImgWrap>
        <img
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPoster
          }
          alt={title}
        />
      </ImgWrap>
      <InfoBlock>
        <Title>{title}</Title>
        <UserScore>
          User Score: <p>{Math.round(vote_average * 10)}%</p>
        </UserScore>
        <Overview>Overview</Overview>
        <OverviewInfo>{overview}</OverviewInfo>
        <Genres>Genres</Genres>
        <GenresInfo>{genres.map(genre => genre.name).join(' , ')}</GenresInfo>
      </InfoBlock>
    </Container>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
  overview: PropTypes.string,
};
