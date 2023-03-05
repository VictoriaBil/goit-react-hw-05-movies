import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: teal;
  }
`;
