import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <h3>Full Stack Developer</h3>
        <SectionTitle main center>
          Hi, I'm <span>Ahmed</span>
          <br />
          from Sacramento, CA
        </SectionTitle>
        <SectionText>
          I am a highly skilled Full Stack Developer with a strong background in
          ASP.NET and JavaScript. With a passion for creating dynamic and
          user-friendly web applications, I bring a wealth of experience and
          expertise to the table. I excel in building robust, efficient, and
          responsive software solutions, making me a valuable asset to any
          development team.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
