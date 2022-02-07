import styled from "styled-components";

export const StyledSelect = styled.select`
  outline: none;
  width: 90px;
  height: 30px;
  background: ${({ theme }) => theme.colors.black[500]};
  color: ${({ theme }) => theme.colors.black[100]};
  padding-left: 5px;
  font-size: 14px;
  border: ${({ theme }) => "1px solid" + theme.colors.black[300]};
  border-radius: 4px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
