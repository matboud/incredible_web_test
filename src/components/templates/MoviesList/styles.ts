import styled from "styled-components";

export const RecommendContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  width: 100%;
  color: white;
  padding: 30px 0px;
  padding-bottom: 120px;
  max-width: 1600px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    padding-bottom: 40px;
  }
`;

export const RecommendTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const RecommendContent = styled.div`
  border-radius: 7px;
`;

export const RecommendSubContent = styled.div`
  transition: 0.5s;
  box-shadow: rgb(0 0 0 / 35%) 0px 4px 6px 0px;
  border-radius: 7px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const RecommendLink = styled.a`
  display: block;
  background: rgba(0, 0, 0, 0.5)
    url(${(props) => props.cover}
    no-repeat center center;
  background-size: cover;
  height: 270px;
  cursor: pointer;
  position: relative;
  border-radius: 7px;
  color: white;;
`;

export const RecommendSubTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const RecommendName = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
`;

export const RecommendRating = styled.div`
  font-size: 15px;
`;
