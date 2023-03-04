export const CastList = ({ cast }) => {
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
            <title>{name}</title>
            <div>
              Character: <p>{character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
