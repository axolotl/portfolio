import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import Text from "../components/styles/Text";
import { InternalLink, ExternalLink } from "../components/styles/InlineLink";

const Index = () => (
  <Content>
    <Title>Hello,</Title>
    <Text>My name is Samuel Machat.</Text>
    <Text>I’m passionate about leveraging technology to solve hard problems.</Text>
    <Text>
      To that end, I taught myself how to build web apps with React. My work is
      showcased <InternalLink to="/projects">here</InternalLink>.
    </Text>
    <Text>
      I am constantly learning, constantly improving. To see my progress, check out my{" "}
      <ExternalLink href="https://github.com/axolotl">
        Github profile
      </ExternalLink>. I look forward to bringing this drive and curiosity to my next position.
    </Text>
    <Text>
      If you think I might fit what you’re looking for, click <InternalLink to="/contact">here</InternalLink> to contact me.
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
