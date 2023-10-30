import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo/AhmedOsman.svg" alt="logo" width={200} height={50} />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#home">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ahmedaosman-hub">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ahmedaosman00/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto: ahmedaosman00@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
