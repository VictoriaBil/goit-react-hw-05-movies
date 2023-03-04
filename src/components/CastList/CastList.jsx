import PropTypes from 'prop-types';

export const CastList = ({ cast }) => {
  if (!cast || !cast.length) {
    return <p>No information about cast is available</p>;
  } else
    return (
      <ul>
        {cast.map(({ profile_path, cast_id, name, character }) => {
          return (
            <li key={cast_id}>
              <img
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : 'noPoster'
                }
                alt={name}
              />
              <div>
                <h2>{name}</h2>
                <p>
                  Character: <p>{character}</p>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
