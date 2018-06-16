import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import Text from "../components/styles/Text";
import MediaQuery from "react-responsive";
import Sidebar from "../components/Sidebar";

// due to design considerations, this component contains media queries to 
// display content dependent on whether the user is on mobile or not

const Projects = ({ data }) => (
  <Content>
    <Title>What and Why</Title>
    <Text>
      My work is divided into projects and exercises. Projects are more involved
      and complex, designed to build my understanding of app design. Exercises
      are quick and simple, designed to test my ability to rapidly prototype
      basic concepts.
    </Text>
    <Text>
      All apps are built with vanilla React or Gatsby. For full stack projects,
      I build the back ends with Express, Sequelize, and Postgres. For hosting,
      I used Github Pages, Heroku, and Firebase.
    </Text>
    <MediaQuery maxWidth={500}>
      <div>
        <Text>
          Some projects are not mobile friendly. In cases where this is true, it
          is because I deemed responsiveness beyond the scope of my objective.
        </Text>
        <Sidebar data={data} embedded />
      </div>
    </MediaQuery>
  </Content>
);

export default Projects;

export const menuQuery = graphql`
  query menuQuery {
    allProjectsJson {
      edges {
        node {
          fields {
            slug
          }
          link_name
          type
        }
      }
    }
  }
`;