import styled from "styled-components";

export const Container = styled.div`
  font-size: 13px;
  transition: 0.2s linear;
  height: ${({ height }) => height && height};
`;

export const ShareArea = styled.div`
  padding: 0.5rem 0;
  display: flex;
  gap: 0.5rem;
`;

export const Image = styled.div`
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
  background-size: cover;
  height: 340px;
  transition: 0.2s linear;
  border-radius: 7px;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const Overview = styled.span`
  position: absolute;
  top: 30px;
  left: 0px;
  opacity: 0;
  transition: 0.2s linear;
  color: white;
  line-height: 1.8;
  font-size: 14px;
  padding: 20px;
`;

export const PlayButton = styled.button`
  position: absolute;
  bottom: 18px;
  left: 50%;
  background: none;
  transform: translate(-50%);
  opacity: 0;
  transition: 0.2s linear;
  color: white;
  line-height: 1.8;
  font-size: 14px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
  width: 48%;
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.red[500]};
    border: ${({ theme }) => "1px solid" + theme.colors.red[500]};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: white;
  font-size: 15px;
  margin-top: 12px;
  font-weight: bold;
`;

export const YearRatingContainer = styled.div`
  margin-top: 11px;
`;

export const Year = styled.span`
  color: ${({ theme }) => theme.colors.yellow[500]};
  font-size: 14px;
  margin-right: 10px;
`;

export const ContentRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

export const ContentRatingChild = styled.div`
  font-size: 14px;
  color: gray;
  margin-left: 3px;
  margin-top: 2px;
`;

export const PosterContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  transition: 0.2s linear;

  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Overview} {
      opacity: 1;
    }
    ${PlayButton} {
      opacity: 1;
    }
  }
`;

export const ScLink = styled.div`
  width: 220px;
  border-radius: 7px;
  margin-right: 20px;
  margin-bottom: 45px;

  &:hover {
    ${Container} {
      transform: scale(1.05);
    }
    ${PosterContainer} {
      box-shadow: 0 2px 8px black, 0 2px 4px black;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 170px;
    margin-bottom: 40px;
  }
`;
