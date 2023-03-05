import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: teal;
  margin: 0;
  margin-top: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  padding: 10px 30px;
  display: inline-block;
  width: 50px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid teal;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: teal;
  }
`;
