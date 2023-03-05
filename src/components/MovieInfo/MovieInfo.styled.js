import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 40px;
`;

export const ImgWrap = styled.div`
  padding: 15px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: 700;
  color: teal;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserScore = styled.span`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;

  p {
    margin: 0;
  }
`;

export const Overview = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const OverviewInfo = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Genres = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const GenresInfo = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`;
