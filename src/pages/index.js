import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import Text from "../components/styles/Text";
import { InternalLink, ExternalLink } from "../components/styles/InlineLink";

const Index = () => (
  <Content>
    <Title>Hello,</Title>
    <Text>My name is Samuel Machat.</Text>
    <Text>I want to help build products that solve real world problems.</Text>
    <Text>
      To that end, I taught myself how to build web apps with React. My work is
      showcased <InternalLink to="/projects">here</InternalLink>.
    </Text>
    <Text>
      Every day I learn more. Every day my work improves. To see my progress,
      check out my{" "}
      <ExternalLink href="https://github.com/axolotl">
        Github profile
      </ExternalLink>. With the structure and guidance of a team, I look forward
      to accelerating my growth.
    </Text>
    <Text>
      I moved to San Francisco to pursue this goal. If you are in SF and looking
      for a junior developer, I hope you will choose me.
    </Text>
    <Text>
      Click <InternalLink to="/contact">here</InternalLink> to contact me.
    </Text>
  </Content>
);

export default Index;

// const Index = ({ data }) => {
//   const { header, content } = data.content.childContentJson.about;

//   console.log(content);

//   return (
//     <Content>
//       <Title>{header}</Title>
//       {content.map((content, i) => <Text key={i}>{content}</Text>)}
//     </Content>
//   );
// };

// export default Index;

// export const indexQuery = graphql`
//   query indexQuery {
//     content: file(relativePath: { eq: "content.json" }) {
//       childContentJson {
//         about {
//           header
//           content
//         }
//       }
//     }
//   }
// `;
