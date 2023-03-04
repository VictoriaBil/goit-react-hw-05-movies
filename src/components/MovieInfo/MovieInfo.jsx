export const MovieInfo = ({
  movieInfo: { poster_path, title, vote_average, genres, overview },
}) => {
  return (
    <div>
      <div>
        <img
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'noPoster'
          }
          alt={title}
        />
      </div>
      <div>
        <title>{title}</title>
        <span>
          User Score: <p>{Math.round(vote_average * 10)}%</p>
        </span>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.map(genre => genre.name).join(' , ')}</p>
      </div>
    </div>
  );
};
