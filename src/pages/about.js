import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import Text from "../components/styles/Text";
import { ExternalLink } from "../components/styles/InlineLink";

const About = () => (
  <Content>
    <Title>About Me</Title>
    <Text>
      Before learning web development and moving to San Francisco, I worked as a
      barista and bartender in New Orleans and in Burlington, Vermont. Since
      graduating with my Associate of Science (AS) at the age of 18, I have also
      taught English in Costa Rica and worked as a landscaper in Central
      Virginia.
    </Text>
    <Text>
      In my spare time I enjoy yoga, weightlifting, and reading. Recent favorite
      book include <cite>Midnight’s Children</cite> by Salman Rushdie and{" "}
      <cite>The Three-Body Problem</cite> by Cixin Liu. During the time that I
      worked as a barista, I enjoyed competing in latte art competitions.{" "}
    </Text>
    <Text>
      Find me on{" "}
      <ExternalLink href="https://www.instagram.com/samuelmachat/">
        Instagram
      </ExternalLink>{" "}
      and on{" "}
      <ExternalLink href="https://www.facebook.com/samuel.e.machat">
        Facebook
      </ExternalLink>.
    </Text>
    <Text />
  </Content>
);

export default About;
