import { useLocation, Outlet } from 'react-router-dom';
import { PageNames } from '../../router/paths';
import {
  Wrapper,
  Title,
  List,
  Item,
  Link,
} from '../AdditionalInfo/AdditionalInfo.styled';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Title>Additional information</Title>
      <List>
        <Item>
          <Link
            to={PageNames.cast}
            state={{ from: location.state?.from ?? '/' }}
          >
            Cast
          </Link>
        </Item>
        <Item>
          <Link
            to={PageNames.reviews}
            state={{ from: location.state?.from ?? '/' }}
          >
            Reviews
          </Link>
        </Item>
      </List>
      <Outlet />
    </Wrapper>
  );
};
