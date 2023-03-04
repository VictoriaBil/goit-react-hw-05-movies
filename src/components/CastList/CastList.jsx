export const CastList = ({ cast }) => {
  if (!cast || !cast.length) {
    return <p>No information about cast is available</p>;
  }
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
