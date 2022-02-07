import styled from "styled-components";

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  margin: 0.4rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color:  ${({ theme }) => theme.colors.black[100]};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color:  ${({ theme }) => theme.colors.yellow[500]};
    background:  ${({ theme }) => theme.colors.black[300]};
    border-radius: 4px
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.black[500]};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 5px -11px 15px 6px black;
  z-index: 2;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.yellow[500]};;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: 0.5s ease-in;
    width: 100%;
    padding-bottom: ${({ isOpen }) => (isOpen ? "1.5rem" : "0")};
  }
`;

export const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background:  ${({ theme }) => theme.colors.yellow[500]};;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
