import React, { ReactNode } from "react";
import GlobalStyle from "../../../styles/global-style";
import { Wrapper } from "./styles";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
  backgroundColor?: string;
  displayFilters?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColor,
  displayFilters,
}) => (
  <>
    <GlobalStyle backgroundColor={backgroundColor} />
    <Navbar displayFilters={displayFilters} /> {/*  */}
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

export default Layout;
