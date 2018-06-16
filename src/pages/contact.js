import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import _Text from "../components/styles/Text";
import { ExternalLink } from "../components/styles/InlineLink";

const Text = _Text.extend`
  margin-bottom: 5px;
`;

const Contact = () => (
  <Content>
    <Title>Contact Me</Title>
    <Text>Find me on:</Text>
    <Text>
      <ExternalLink href="https://github.com/axolotl">Github</ExternalLink>
    </Text>
    <Text>
      <ExternalLink href="https://angel.co/samuel-machat">
        AngelList
      </ExternalLink>
    </Text>
    <Text>
      <ExternalLink href="https://www.linkedin.com/in/samuel-machat/">
        LinkedIn
      </ExternalLink>
    </Text>
    <_Text>
      <ExternalLink href="https://www.facebook.com/samuel.e.machat">
        Facebook
      </ExternalLink>
    </_Text>
    <Text>Or contact me via email at:</Text>
    <Text>
      <ExternalLink href="mailto:samuelmachat@gmail.com">
        samuelmachat@gmail.com
      </ExternalLink>
    </Text>
  </Content>
);

export default Contact;
