import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Item = styled.li`
  max-width: 200px;
  border: 1px solid teal;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  max-width: 200px;
`;

export const CastInfo = styled.div`
  padding-left: 10px;
`;

export const Character = styled.p`
  font-weight: 700;
`;

export const Name = styled.h2`
  color: teal;
`;

export const CharacterInfo = styled.p`
  font-weight: 500;
`;
