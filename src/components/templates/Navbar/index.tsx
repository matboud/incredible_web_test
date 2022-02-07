import React, { useState } from "react";
import theme from "../../../theme/config";
import Button from "../../atoms/Button/index";
import { Wrapper } from "../Layout/styles";
import Filter from "../Filter";

import { MenuLink, Nav, Logo, Menu, Hamburger } from "./styles";
import Link from "next/link";
import Head from "next/head";

const index = ({ displayFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Movies movie,
          Streaming: Live, Category: Movies, Price: free,
          Length: all movies"
        />
        <title>MOVIfy</title>
      </Head>
      <Nav>
        <Link href="/">
          <Logo href="">
            MOVI<span>fy</span>
          </Logo>
        </Link>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Link href="/about">
            <MenuLink>About</MenuLink>
          </Link>
          <Link href="/contact">
            <MenuLink>Contact</MenuLink>
          </Link>
          <Button
            background={theme.colors.yellow[500]}
            color={theme.colors.black[700]}
            margin={"0 0 0 0.5rem"}
          >
            Sign-In
          </Button>
        </Menu>
      </Nav>
      {displayFilters && (
        <Wrapper displayFilters={displayFilters}>
          <Filter />
        </Wrapper>
      )}
    </>
  );
};

export default index;
