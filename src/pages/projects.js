import React from "react";
import Title from "../components/styles/Title";
import Content from "../components/styles/Content";
import Text from "../components/styles/Text";

const Projects = () => (
  <Content>
    <Title>What and Why</Title>
    <Text>My work is divided into projects and exercises. Projects are more involved and complex, designed to build my understanding of app design. Exercises are quick and simple, designed to test my ability to rapidly prototype basic concepts.</Text>
    <Text>All apps are built with vanilla React or Gatsby. For full stack projects, I build the back ends with Express, Sequelize, and Postgres. For hosting, I used Github Pages, Heroku, and Firebase.</Text>
    <Text>Some projects are not mobile friendly. In cases where this is true, it is because I deemed responsiveness beyond the scope of my objective.</Text>
  </Content>
);

export default Projects;
