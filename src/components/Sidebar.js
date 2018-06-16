import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import SidebarWrapper from "./wrappers/SidebarWrapper";
import MenuLink from "./MenuLink";

const List = styled.ul`
  margin: 5px 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  font-weight: bold;
`;

const ListItem = styled.li`
  list-style: none;
  color: #393939;
  padding-left: 10px;
  margin: 5px 0;
  font-weight: normal;
`;

const Sidebar = ({ data, responsive, location }) => {
  const { edges } = data.allProjectsJson;
  const projects = edges.filter(edge => edge.node.type === "project");
  const exercises = edges.filter(edge => edge.node.type === "exercise");

  return (
    <SidebarWrapper>
      <List>
        Intro
        <ListItem>
          <MenuLink to="/projects" location={location}>
            What and Why
          </MenuLink>
        </ListItem>
      </List>

      <List>
        Projects
        {projects.map((project, i) => (
          <ListItem key={i}>
            <MenuLink to={project.node.fields.slug} location={location}>
              {project.node.link_name}
            </MenuLink>
          </ListItem>
        ))}
      </List>

      <List>
        Exercises
        {exercises.map((exercise, i) => (
          <ListItem key={i}>
            <MenuLink to={exercise.node.fields.slug} location={location}>
              {exercise.node.link_name}
            </MenuLink>
          </ListItem>
        ))}
      </List>

      {responsive && (
        <List>
          About
          <ListItem key={"about"}>
            <MenuLink to="/about">Who am I?</MenuLink>
          </ListItem>
        </List>
      )}

      {responsive && (
        <List>
          Contact
          <ListItem key={"contact"}>
            <MenuLink to="/contact">Contact me</MenuLink>
          </ListItem>
        </List>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
