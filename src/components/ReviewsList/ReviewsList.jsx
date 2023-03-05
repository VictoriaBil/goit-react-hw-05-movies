import PropTypes from 'prop-types';
import { List, Item, Name, Review } from '../ReviewsList/ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return <p>No information about reviews is available</p>;
  }
  return (
    <List>
      {reviews.map(({ id, author, content }) => {
        return (
          <Item key={id}>
            <Name>Author: {author}</Name>
            <Review>{content}</Review>
          </Item>
        );
      })}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
