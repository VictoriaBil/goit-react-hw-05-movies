export const ReviewsList = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return <p>No information about reviews is available</p>;
  }
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
