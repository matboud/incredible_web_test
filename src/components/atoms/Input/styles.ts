import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  font-size: 17px;
  padding: 13.3px;
  margin: 0 10px 0 0;
  background: ${({ theme }) => theme.colors.black[500]};
  color: ${({ theme }) => theme.colors.black[100]};
  border: none;
  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black[300]};
  }
`;
