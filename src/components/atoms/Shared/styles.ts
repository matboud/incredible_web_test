// this file contain the shared Styled
// Components between  different parts 
// of the app

import styled from "styled-components";

export const BlurBackground = styled.div`
  position: fixed;
  top: 4.3rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.2;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  flex-direction: column;
  font-family: "Do Hyeon", sans-serif;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  color: white;
  margin-top: 120px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 75px;
  }
`;

export const CoverLink = styled.a`
  width: 340px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Cover = styled.div`
  width: 340px;
  height: 510px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 50%) 0px 7px 10px, rgb(0 0 0 / 24%) 0px -12px 30px,
    rgb(0 0 0 / 24%) 0px 4px 6px, rgb(0 0 0 / 34%) 0px 12px 13px,
    rgb(0 0 0 / 18%) 0px -3px 5px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 400px;
  }
`;

export const CoverHeading = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CoverMiddle = styled.div``;

export const Data = styled.div`
  padding-left: 45px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const DateRunTimeContainer = styled.div`
  font-size: 18px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const VoteContainer = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Divider = styled.span`
  color: gray;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-top: 15px;
  }
`;

export const Item = styled.span``;

export const Keywords = styled.div`
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const KeywordTitle = styled.h1`
  font-size: 18px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const KeywordContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const KeywordSpan = styled.span`
  color: #fed330;
  border: 1px solid #fed330;
  background-color: transparent;
  padding: 7px 12px;
  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #fed330;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TeaserContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const TeaserTitle = styled.h1`
  font-size: 25px;
`;

export const TeaserVideo = styled.div`
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IframeContainer = styled.div`
  float: none;
  clear: both;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;

  & > iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Iframe = styled.iframe`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;
