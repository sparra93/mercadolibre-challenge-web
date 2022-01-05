import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const LinkContainer = styled.div`
    cursor: pointer;
`

const CustomLink = ({ className, href, as, children }) => (
  <LinkContainer>
    <Link href={href} as={as} passHref>
      {children}
    </Link>
  </LinkContainer>
);

export default CustomLink;
