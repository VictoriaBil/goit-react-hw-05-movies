import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 40px;
  margin-top: 20px;
`;

export const List = styled.li`
  list-style: none;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  transition: transform 0.3s;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.03);
    transition: 400ms linear;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.9);
  }

  > a {
    text-decoration: none;
  }

  img {
    width: 350px;
  }
`;

export const Title = styled.h1`
  padding: 4px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
