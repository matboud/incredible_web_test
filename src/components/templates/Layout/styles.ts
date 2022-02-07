import styled from "styled-components";
{
  /* 
  @media print is added in case to define other
  class styles as well ( @media screen could be
  handy as well in the case of this wrapper ) */
}
export const Wrapper = styled.div`
  padding-top: ${({ displayFilters }) => (displayFilters ? "4rem" : "0")};
  @media print {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.black[700]};
  }
`;

{
  /*
    container could be used as a wrapped container
  */
}
export const Container = styled.div`
  display: ${({ displayFlex }) => (displayFlex ? "flex" : "block")};
  align-items: ${({ flex }) => (flex ? "center" : "left")};
  flex: ${({ flexNum }) => (flexNum ? flexNum : "none")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  gap: ${({ gap }) => (gap ? gap : "0")};
  justify-content: ${({ justifyCenter }) =>
    justifyCenter ? "center" : "left"};

  @media (min-width: 768px) {
    display: ${({ flex }) => (flex ? "flex" : "block")};
  }
  @media (max-width: 768px) {
    padding: ${({ mobilePadding }) => (mobilePadding ? mobilePadding : "0")};
  }
`;

{
  /*
    ResponsiveContainer could be wrapped inside 
    container  so  it could be fully responsive
  */
}
export const ResponsiveContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  flex: ${({ flexNum }) => (flexNum ? flexNum : "none")};

  @media (max-width: 768px) {
    justify-content: center;
    padding: ${({ padding }) => (padding ? padding : "0px")};
  }
`;
